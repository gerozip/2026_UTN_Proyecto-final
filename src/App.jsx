import { useContext, useRef, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsContextProvider from './Context/ContactContext'
import { AuthContext } from './Context/AuthContext'
import Login from './Components/Login/Login'
import ContactSideBar from './Components/ContactSideBar/ContactSideBar'
import Debug from './Debug'

function App() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const hasRedirected = useRef(false)

    // Redirigir a la página de inicio solo cuando el usuario inicia sesión por primera vez
    useEffect(() => {
        if (user && !hasRedirected.current) {
            hasRedirected.current = true
            navigate('/')
        }
    }, [user, navigate])

    // Si no hay usuario autenticado, mostrar Login
    if (!user) {
        return (
            <>
                <Debug />
                <Login />
            </>
        )
    }

    // Si hay usuario, mostrar la app
    return (
        <ContactsContextProvider>
            <div className="app-container">
                <ContactSideBar />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/contact/:contact_id" element={<ContactScreen />} />
                    <Route path="*" element={<ErrorNotFoundScreen />} />
                </Routes>
            </div>
        </ContactsContextProvider>
    )
}
export default App