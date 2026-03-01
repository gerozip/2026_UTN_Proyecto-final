import { createContext, useState } from "react";
import { getContacts } from "../services/contactsService";

export const ContactsContext = createContext(
    {
        contacts: [],
        favorite_name: ''
    }
)

const ContactsContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactsState, setContactsState] = useState(contacts)

    const updateContactMessages = (contactId, messages) => {
        setContactsState(prevContacts =>
            prevContacts.map(contact =>
                contact.id === contactId
                    ? { ...contact, messages }
                    : contact
            )
        )
    }

    const togglePin = (contactId) => {
        setContactsState(prevContacts =>
            prevContacts.map(contact =>
                contact.id === contactId
                    ? { ...contact, is_pinned: !contact.is_pinned }
                    : contact
            )
        )
    }

    const toggleMute = (contactId) => {
        setContactsState(prevContacts =>
            prevContacts.map(contact =>
                contact.id === contactId
                    ? { ...contact, is_muted: !contact.is_muted }
                    : contact
            )
        )
    }

    const toggleBlock = (contactId) => {
        setContactsState(prevContacts =>
            prevContacts.map(contact =>
                contact.id === contactId
                    ? { ...contact, is_blocked: !contact.is_blocked }
                    : contact
            )
        )
    }

    const deleteContact = (contactId) => {
        setContactsState(prevContacts =>
            prevContacts.filter(contact => contact.id !== contactId)
        )
    }

    const deleteChat = (contactId) => {
        setContactsState(prevContacts =>
            prevContacts.map(contact =>
                contact.id === contactId
                    ? { ...contact, messages: [] }
                    : contact
            )
        )
    }

    const addHighlightedMessage = (contactId, messageId) => {
        setContactsState(prevContacts =>
            prevContacts.map(contact =>
                contact.id === contactId
                    ? { 
                        ...contact, 
                        highlighted_messages: [...(contact.highlighted_messages || []), messageId]
                      }
                    : contact
            )
        )
    }

    const removeHighlightedMessage = (contactId, messageId) => {
        setContactsState(prevContacts =>
            prevContacts.map(contact =>
                contact.id === contactId
                    ? { 
                        ...contact, 
                        highlighted_messages: (contact.highlighted_messages || []).filter(id => id !== messageId)
                      }
                    : contact
            )
        )
    }

    const provider_value = {
        contacts: contactsState,
        favorite_name: 'Among us',
        updateContactMessages,
        togglePin,
        toggleMute,
        toggleBlock,
        deleteContact,
        deleteChat,
        addHighlightedMessage,
        removeHighlightedMessage
    }
    return (
        <ContactsContext.Provider 
            value={provider_value}
        >
            {children}
        </ContactsContext.Provider>
    )  
}

export default ContactsContextProvider