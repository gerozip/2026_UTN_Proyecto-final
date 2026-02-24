import React, { useContext, useState, useEffect } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactContext'

export default function ContactScreen() {
  const { contacts, updateContactMessages } = useContext(ContactsContext)
  const { contact_id } = useParams()
  const contact_selected = contacts.find(contact => contact.id === Number(contact_id))
  
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  // Inicializar mensajes cuando se carga el contacto
  useEffect(() => {
    if (contact_selected) {
      setMessages(contact_selected.messages)
    }
  }, [contact_selected])

  const handleVideoCall = () => {
    alert(`Iniciando videollamada con ${contact_selected.name}...`)
  }

  const handleCall = () => {
    alert(`Llamando a ${contact_selected.name}...`)
  }

  const handleOptions = () => {
    alert(`Abriendo opciones para ${contact_selected.name}...`)
  }

  const generateAutoResponse = (userMessage) => {
    const responses = [
      '¿De verdad?',
      'Interesante...',
      'Jajaja me encanta',
      'Totalmente de acuerdo',
      'Cuéntame más',
      'Eso es genial!',
      'No te entendí muy bien',
      'Compartimos los mismos intereses',
      'Me alegra saber eso',
      'Como siempre, excelente punto'
    ]

    const randomIndex = Math.floor(Math.random() * responses.length)
    return responses[randomIndex]
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!inputValue.trim()) return

    // Crear nuevo mensaje del usuario
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      send_by_me: true,
      created_at: new Date().toISOString(),
      is_read: true
    }

    // Agregar el mensaje del usuario
    const updatedMessages = [...messages, newUserMessage]
    setMessages(updatedMessages)
    updateContactMessages(contact_selected.id, updatedMessages)
    setInputValue('')

    // Simular respuesta automática después de 1 segundo
    setTimeout(() => {
      const autoResponse = {
        id: updatedMessages.length + 1,
        text: generateAutoResponse(inputValue),
        send_by_me: false,
        created_at: new Date().toISOString(),
        is_read: true
      }
      const messagesWithResponse = [...updatedMessages, autoResponse]
      setMessages(messagesWithResponse)
      updateContactMessages(contact_selected.id, messagesWithResponse)
    }, 1000)
  }

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
              <div className="chat-header-content">
                <img 
                  src={contact_selected.profile_picture} 
                  alt={contact_selected.name}
                  className="chat-header-avatar"
                />
                <div className="chat-header-info">
                  <h2>{contact_selected.name}</h2>
                  <p className="chat-header-status">En línea</p>
                </div>
                <div className="chat-header-actions">
                  {showSearch && (
                    <input 
                      type="text"
                      placeholder="Buscar en chat..."
                      className="search-input"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      autoFocus
                    />
                  )}
                  <button 
                    className="header-btn search-btn"
                    onClick={() => setShowSearch(!showSearch)}
                    title="Buscar"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                  <button 
                    className="header-btn"
                    onClick={handleCall}
                    title="Llamada"
                  >
                    <i className="bi bi-telephone-fill"></i>
                  </button>
                  <button 
                    className="header-btn"
                    onClick={handleVideoCall}
                    title="Videollamada"
                  >
                    <i className="bi bi-camera-video-fill"></i>
                  </button>
                  <button 
                    className="header-btn menu-btn"
                    onClick={handleOptions}
                    title="Opciones"
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </div>
            </header>

            <section className="messages">
              {messages.map((message) => {
                return (
                  <div key={message.id} className={"message-row " + (message.send_by_me ? 'me' : 'them')}>
                    <div className={"bubble " + (message.send_by_me ? 'bubble-me' : 'bubble-them')}>
                      <p>{message.text}</p>
                      <span className="msg-time">{message.created_at ? new Date(message.created_at).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      }) : ''}</span>
                    </div>
                  </div>
                )
              })}
            </section>

            <form className="message-form" onSubmit={handleSubmit}>
              <textarea 
                placeholder="Escribe un mensaje..." 
                className="message-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
              />
              <button type="submit" className="send-button">Enviar</button>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}
