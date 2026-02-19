import React, { useContext } from 'react'
import { getContacts } from '../../services/contactsService'
import { ContactsContext } from '../../Context/ContactContext'
import { Link } from 'react-router'

export default function ContactSideBar() {
    //useContext es un hook que nos permite consumir el contexto
    //Recibe como parametro el contexto que queremos consumir
    //Una vez consumido me traera el valor del value del contexto
    const { contacts, favorite_name } = useContext(ContactsContext)
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2 className="app-title">WhatsApp Clone</h2>
                <h3 className="favorite">Me cae muy bien {favorite_name}</h3>
            </div>

            <nav className="contact-list">
                {contacts.map((contact) => {
                    const lastMsg = contact.messages && contact.messages.length ? contact.messages[contact.messages.length - 1].text : ''
                    return (
                        <Link to={`/contact/${contact.id}`} key={contact.id} className="contact-link">
                            <div className="contact-item">
                                <img src={contact.profile_picture} alt={contact.name} className="avatar" />
                                <div className="contact-meta">
                                    <div className="contact-row">
                                        <span className="contact-name">{contact.name}</span>
                                        <span className="contact-time">{contact.last_connection}</span>
                                    </div>
                                    <div className="contact-last">{lastMsg}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
