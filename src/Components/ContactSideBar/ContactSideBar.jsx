import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactContext'
import { AuthContext } from '../../Context/AuthContext'
import Login from '../Login/Login'
import { Link } from 'react-router'

export default function ContactSideBar() {
    const { contacts } = useContext(ContactsContext)
    const { user } = useContext(AuthContext)

    // 🔐 Si no hay usuario, mostramos login
    if (!user) {
        return <Login />
    }

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2 className="app-title">Bienvenido {user.name}</h2>
                <h3 className="favorite">{user.phone}</h3>
            </div>

            <nav className="contact-list">
                {contacts.map((contact) => {
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
                                        {lastMsg}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
