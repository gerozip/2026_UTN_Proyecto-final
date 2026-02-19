import React, { useContext } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactContext'

export default function ContactScreen() {
    const {contacts} = useContext(ContactsContext)

    //Obtengo el id del contacto seleccionado a traves de los parametros de la url
    const {contact_id} = useParams()

    //Busco el contacto seleccionado a traves de la lista de contactos
    const contact_selected = contacts.find(contact => contact.id === Number(contact_id))  
  return (
    <div className="app-container">
      <ContactSideBar />

      <main className="chat-area">
        {!contact_selected ? (
          <div className="empty-state">
            <h1>El contacto seleccionado no existe</h1>
          </div>
        ) : (
          <div className="chat-view">
            <header className="chat-header">
              <h2>{contact_selected.name}</h2>
            </header>

            <section className="messages">
              {contact_selected.messages.map((message) => {
                return (
                  <div key={message.id} className={"message-row " + (message.send_by_me ? 'me' : 'them')}>
                    <div className={"bubble " + (message.send_by_me ? 'bubble-me' : 'bubble-them')}>
                      <p>{message.text}</p>
                      <span className="msg-time">{message.created_at ? new Date(message.created_at).toLocaleTimeString() : ''}</span>
                    </div>
                  </div>
                )
              })}
            </section>

            <form className="message-form">
              <textarea placeholder="Escribe un mensaje..." className="message-input" />
              <button type="submit" className="send-button">Enviar</button>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}
