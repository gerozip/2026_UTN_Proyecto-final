import { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactContext'
import { AuthContext } from '../../Context/AuthContext'
import Login from '../Login/Login'
import { Link } from 'react-router'
import { IoSettingsOutline, IoPin, IoPinOutline } from 'react-icons/io5'

export default function ContactSideBar() {
    const { contacts, togglePin } = useContext(ContactsContext)
    const { user } = useContext(AuthContext)

    // 🔐 Si no hay usuario, mostramos login
    if (!user) {
        return <Login />
    }

    // Ordenar contactos: fijados primero, luego por último mensaje (más reciente primero)
    const sortedContacts = [...contacts].sort((a, b) => {
        if (a.is_pinned === b.is_pinned) {
            // Si ambos tienen el mismo estado de pin, ordenar por último mensaje
            const aLastMsg = a.messages?.[a.messages.length - 1]?.created_at
            const bLastMsg = b.messages?.[b.messages.length - 1]?.created_at
            if (!aLastMsg && !bLastMsg) return 0
            if (!aLastMsg) return 1
            if (!bLastMsg) return -1
            return new Date(bLastMsg) - new Date(aLastMsg)
        }
        return a.is_pinned ? -1 : 1
    })

    return (
        <div className="sidebars-container">
            <aside className="profile-sidebar">
                <div className="profile-section">
                    <img
                        src={user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'U')}`}
                        alt="Perfil"
                        className="profile-pic"
                    />
                    <span className="profile-name">{user?.name || 'Usuario'}</span>
                    <span className="profile-status">En línea</span>
                </div>
                <div className="profile-settings-bottom">
                    <button className="settings-btn" title="Ajustes">
                        <IoSettingsOutline size={24} />
                    </button>
                </div>
            </aside>
            <aside className="whatsapp-sidebar">
                <nav className="contact-list">
                    {sortedContacts.map((contact) => {
                        const lastMsg =
                            contact.messages && contact.messages.length
                                ? contact.messages[contact.messages.length - 1].text
                                : ''

                        return (
                            <Link
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                                className="contact-link"
                            >
                                <div className="contact-item">
                                    <img
                                        src={contact.profile_picture}
                                        alt={contact.name}
                                        className="avatar"
                                    />
                                    <div className="contact-meta">
                                        <div className="contact-row">
                                            <span className="contact-name">
                                                {contact.name}
                                            </span>
                                            <span className="contact-time">
                                                {contact.last_connection}
                                            </span>
                                        </div>
                                        <div className="contact-last">
                                            <span>{lastMsg}</span>
                                            {contact.is_pinned && (
                                                <button 
                                                    className="contact-pin-btn"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        togglePin(contact.id)
                                                    }}
                                                    title="Desfijar"
                                                >
                                                    <IoPin />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </nav>
            </aside>
        </div>
    )
}
