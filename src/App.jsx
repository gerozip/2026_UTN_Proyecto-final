import { useContext } from 'react'
import { Routes, Route } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsContextProvider from './Context/ContactContext'
import { AuthContext } from './Context/AuthContext'
import Login from './Components/Login/Login'

function App() {
    const { user } = useContext(AuthContext)

    // Si no hay usuario autenticado, mostrar Login
    if (!user) {
        return <Login />
    }

    // Si hay usuario, mostrar la app
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