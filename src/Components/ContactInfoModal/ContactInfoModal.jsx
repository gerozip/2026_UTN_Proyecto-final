import { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactContext'
import { IoClose, IoPin, IoPinOutline, IoVolumeMute, IoVolumeHigh, IoTrash, IoBan } from 'react-icons/io5'
import './ContactInfoModal.css'

export default function ContactInfoModal({ contact, onClose }) {
    const { togglePin, toggleMute, toggleBlock, deleteContact, deleteChat } = useContext(ContactsContext)

    if (!contact) return null

    const highlightedMessages = contact.messages?.filter(msg => contact.highlighted_messages?.includes(msg.id)) || []

    const handleDeleteContact = () => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar a ${contact.name}?`)) {
            deleteContact(contact.id)
            onClose()
        }
    }

    const handleDeleteChat = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este chat?')) {
            deleteChat(contact.id)
            onClose()
        }
    }

    const handleTogglePin = () => {
        togglePin(contact.id)
    }

    const handleToggleMute = () => {
        toggleMute(contact.id)
    }

    const handleToggleBlock = () => {
        if (window.confirm(`¿Estás seguro de que deseas ${contact.is_blocked ? 'desbloquear' : 'bloquear'} a ${contact.name}?`)) {
            toggleBlock(contact.id)
        }
    }

    return (
        <div className="contact-info-modal-overlay" onClick={onClose}>
            <div className="contact-info-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{contact.name}</h2>
                    <button className="close-btn" onClick={onClose}>
                        <IoClose />
                    </button>
                </div>

                <div className="modal-content">
                    {/* Sección de Perfil */}
                    <div className="profile-section-modal">
                        <img src={contact.profile_picture} alt={contact.name} className="profile-pic-modal" />
                        <div className="contact-details">
                            <p className="detail-label">Teléfono:</p>
                            <p className="detail-value">{contact.phone}</p>
                            <p className="detail-label">Email:</p>
                            <p className="detail-value">{contact.email}</p>
                        </div>
                    </div>

                    {/* Sección de Mensajes Destacados */}
                    <div className="section">
                        <h3>Mensajes Destacados</h3>
                        {highlightedMessages.length > 0 ? (
                            <div className="highlighted-messages">
                                {highlightedMessages.map(msg => (
                                    <div key={msg.id} className={`highlighted-msg ${msg.send_by_me ? 'sent' : 'received'}`}>
                                        <p>{msg.text}</p>
                                        <span className="msg-time">
                                            {new Date(msg.created_at).toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true
                                            })}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="no-data">No hay mensajes destacados</p>
                        )}
                    </div>

                    {/* Sección de Multimedia */}
                    <div className="section">
                        <h3>Archivos Multimedia</h3>
                        {contact.media && contact.media.length > 0 ? (
                            <div className="media-container">
                                {contact.media.map((item, idx) => (
                                    <div key={idx} className="media-item">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="no-data">No hay archivos multimedia</p>
                        )}
                    </div>

                    {/* Botones de Acciones */}
                    <div className="actions-section">
                        <button 
                            className="action-btn btn-pin"
                            onClick={handleTogglePin}
                        >
                            {contact.is_pinned ? <IoPin /> : <IoPinOutline />}
                            {contact.is_pinned ? 'Desfijar' : 'Fijar'}
                        </button>

                        <button 
                            className="action-btn btn-mute"
                            onClick={handleToggleMute}
                        >
                            {contact.is_muted ? <IoVolumeHigh /> : <IoVolumeMute />}
                            {contact.is_muted ? 'Silenciar' : 'Desactivar silencio'}
                        </button>

                        <button 
                            className="action-btn btn-block"
                            onClick={handleToggleBlock}
                        >
                            <IoBan />
                            {contact.is_blocked ? 'Desbloquear' : 'Bloquear'}
                        </button>

                        <button 
                            className="action-btn btn-delete-chat"
                            onClick={handleDeleteChat}
                        >
                            <IoTrash />
                            Eliminar chat
                        </button>

                        <button 
                            className="action-btn btn-delete-contact"
                            onClick={handleDeleteContact}
                        >
                            <IoTrash />
                            Eliminar contacto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
