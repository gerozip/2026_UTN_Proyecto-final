import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactContext'
import { IoSend, IoShare, IoShareSocial, IoStar, IoTrash } from 'react-icons/io5'
import { BsThreeDots } from 'react-icons/bs'
import ContactInfoModal from '../../Components/ContactInfoModal/ContactInfoModal'
import { FaShare, FaRegStar } from 'react-icons/fa'


export default function ContactScreen() {
  const { contacts, updateContactMessages } = useContext(ContactsContext)
  const { contact_id } = useParams()
  const contact_selected = contacts.find(contact => contact.id === Number(contact_id))

  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [openMenuId, setOpenMenuId] = useState(null)
  const [showForwardModal, setShowForwardModal] = useState(false)
  const [messageToForward, setMessageToForward] = useState(null)

  // Inicializar mensajes cuando se carga el contacto
  useEffect(() => {
    if (contact_selected) {
      setMessages(contact_selected.messages)
    }
  }, [contact_selected])

  // Cerrar menú al tocar la pantalla
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.message-arrow-btn') && !e.target.closest('.message-menu')) {
        setOpenMenuId(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleVideoCall = () => {
    alert(`Iniciando videollamada con ${contact_selected.name}...`)
  }

  const handleCall = () => {
    alert(`Llamando a ${contact_selected.name}...`)
  }

  const handleOptions = () => {
    alert(`Abriendo opciones para ${contact_selected.name}...`)
  }

  const handleForwardMessage = (message) => {
    setMessageToForward(message)
    setShowForwardModal(true)
  }

  const handleSendForwardedMessage = (contactId) => {
    if (messageToForward) {
      const targetContact = contacts.find(c => c.id === contactId)
      if (targetContact) {
        const forwardedMessage = {
          ...messageToForward,
          id: (targetContact.messages?.length || 0) + 1,
          send_by_me: true,
          created_at: new Date().toISOString(),
          forwarded: true,
          original_sender: contact_selected.name
        }
        updateContactMessages(contactId, [...(targetContact.messages || []), forwardedMessage])
        setShowForwardModal(false)
        setMessageToForward(null)
      }
    }
  }

  const handleHighlightMessage = (messageId) => {
    const updatedMessages = messages.map(msg =>
      msg.id === messageId ? { ...msg, highlighted: !msg.highlighted } : msg
    )
    setMessages(updatedMessages)
    updateContactMessages(contact_selected.id, updatedMessages)
  }

  const handleDeleteMessage = (messageId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este mensaje?')) {
      const updatedMessages = messages.filter(msg => msg.id !== messageId)
      setMessages(updatedMessages)
      updateContactMessages(contact_selected.id, updatedMessages)
    }
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
    <main className="chat-area">
      {!contact_selected ? (
        <div className="empty-state">
          <h1>El contacto seleccionado no existe</h1>
        </div>
      ) : (
        <div className="chat-view">
          <header className="chat-header">
            <div className="chat-header-content" onClick={() => setShowContactInfo(true)} style={{ cursor: 'pointer' }}>
              <img
                src={contact_selected.profile_picture}
                alt={contact_selected.name}
                className="chat-header-avatar"
              />
              <div className="chat-header-info">
                <h2>{contact_selected.name}</h2>
                <p className="chat-header-status">En línea</p>

              </div>
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
                <BsThreeDots />
              </button>
            </div>

          </header>

          <section className="messages">
            {messages.map((message) => {
              return (
                <div key={message.id} className={"message-row " + (message.send_by_me ? 'me' : 'them')}>
                  <div className={"bubble " + (message.send_by_me ? 'bubble-me' : 'bubble-them') + (openMenuId === message.id ? ' menu-open' : '')} style={{ position: 'relative' }}>
                    {message.forwarded && (
                      <div className="msg-forwarded">
                        Reenviado
                      </div>
                    )}
                    <p>{message.text}</p>
                    {message.highlighted && (
                      <span className="msg-highlighted-icon"><FaRegStar /></span>
                    )}
                    <div className="msg-footer">
                      <span className="msg-time">{message.created_at ? new Date(message.created_at).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      }) : ''}</span>
                      {message.send_by_me && (
                        <span className={`msg-status-check ${message.is_read ? 'read' : 'delivered'}`}>
                          {message.is_read ? '✓✓' : '✓✓'}
                        </span>
                      )}
                    </div>
                    <button 
                      className="message-arrow-btn" 
                      onClick={() => setOpenMenuId(openMenuId === message.id ? null : message.id)}
                    >
                      ⋯
                    </button>
                    {openMenuId === message.id && (
                      <div className="message-menu">
                        <button 
                          className="message-menu-item"
                          onClick={() => handleForwardMessage(message)}
                        >
                          <span className="message-menu-icon"><FaShare /></span>
                          <span>Reenviar</span>
                        </button>
                        <button 
                          className="message-menu-item"
                          onClick={() => handleHighlightMessage(message.id)}
                        >
                          <span className="message-menu-icon"><FaRegStar /></span>
                          <span>Destacar</span>
                        </button>
                        <button 
                          className="message-menu-item"
                          onClick={() => handleDeleteMessage(message.id)}
                        >
                          <span className="message-menu-icon"><IoTrash /></span>
                          <span>Eliminar</span>                        </button>
                      </div>
                    )}
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
            <button type="submit" className="send-button">
              <IoSend className="send-icon" onClick={handleSubmit} />
            </button>
          </form>
        </div>
      )}
      {showContactInfo && <ContactInfoModal contact={contact_selected} onClose={() => setShowContactInfo(false)} />}
      
      {showForwardModal && (
        <div className="forward-modal-overlay" onClick={() => setShowForwardModal(false)}>
          <div className="forward-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Reenviar a:</h3>
            <div className="forward-contacts-list">
              {contacts.filter(c => c.id !== contact_selected.id).map(c => (
                <button
                  key={c.id}
                  className="forward-contact-item"
                  onClick={() => handleSendForwardedMessage(c.id)}
                >
                  <img src={c.profile_picture} alt={c.name} />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
            <button className="forward-close-btn" onClick={() => setShowForwardModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </main>
  )
}
