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

    const provider_value = {
        contacts: contactsState,
        favorite_name: 'Among us',
        updateContactMessages
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