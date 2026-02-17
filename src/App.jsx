import React from 'react'
import { Routes, Route } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsContextProvider from './Context/ContactContext'

function App() {

    return (
        <div>
            <ContactsContextProvider >
                <Routes>
                    <Route
                        path='/'
                        element={

                            <HomeScreen  />

                        }
                    />
                    <Route
                        path='/contact/:contact_id'
                        element={
                            <ContactScreen />
                        }
                    />
                    <Route
                        path='*'
                        element={<ErrorNotFoundScreen />}
                    />
                </Routes>
            </ContactsContextProvider>
        </div>
    )
}
export default App