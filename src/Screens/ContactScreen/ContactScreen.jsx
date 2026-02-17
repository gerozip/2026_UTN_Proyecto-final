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
    <div>
        <ContactSideBar />
        //Si el contacto seleccionado no existe, muestro un mensaje de error, sino muestro la informacion del contacto seleccionado
        {
        ! contact_selected 
        ? <div>
            <h1>El contacto seleccionado no existe</h1>
        </div>
        : <div>
          <h1>
            El contacto seleccionado es: {contact_selected.name  }
          </h1>
          <div>
            {
              contact_selected.messages.map(message => {
                return (
                  <div key={message.id}>
                    {
                      message.send_by_me
                      ? <h3>Enviado mi</h3>
                      : <h3>Enviado por: {contact_selected.name}</h3>
                    }
                    <p>{message.text}</p>
                    <span>{message.time}</span>
                    <hr />
                  </div>
                )
            })}
          </div>
          <form>
            <textarea placeholder='Escribe un mensaje...' />
            <button type='submit'>Enviar</button>
          </form>
        </div>
      }
      
    </div>
  )
}
