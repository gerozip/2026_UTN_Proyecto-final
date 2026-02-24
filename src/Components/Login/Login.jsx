import { useState, useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import "./Login.css"

export default function Login() {
    const { login } = useContext(AuthContext)

    const [form, setForm] = useState({
        name: "",
        phone: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        let newErrors = { ...errors }

        if (name === "name") {
            // Solo permite letras y espacios
            const lettersOnly = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]*$/
            if (!lettersOnly.test(value)) {
                newErrors.name = "El nombre solo puede contener letras"
            } else {
                newErrors.name = ""
            }
        }

        if (name === "password") {
            // Valida que tenga entre 8 y 16 caracteres
            if (value.length > 0 && (value.length < 8 || value.length > 16)) {
                newErrors.password = "La contraseña debe tener entre 8 y 16 caracteres"
            } else {
                newErrors.password = ""
            }
        }

        setErrors(newErrors)
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Validar antes de enviar
        if (errors.name || errors.password) {
            return
        }
        
        if (form.password.length < 8 || form.password.length > 16) {
            setErrors({
                ...errors,
                password: "La contraseña debe tener entre 8 y 16 caracteres"
            })
            return
        }
        
        login(form)
    }

    return (
        <div className="whatsapp-login-container">
            <div className="whatsapp-login-box">
                <div className="whatsapp-logo-section">
                    <div className="whatsapp-logo">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.48 3.6 1.32 5.12L2 22l5.12-1.32C8.4 21.52 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.96l-.28-.15-2.89.74.74-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                            <path d="M16.5 12.5c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5zm-5 0c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2c0 .28-.22.5-.5.5z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h1>WhatsApp</h1>
                    <p className="subtitle">Ingresa a tu cuenta</p>
                </div>

                <form onSubmit={handleSubmit} className="whatsapp-form">
                    <div className="form-group">
                        <input 
                            type="text"
                            name="name" 
                            placeholder="Nombre" 
                            value={form.name}
                            onChange={handleChange}
                            className={`whatsapp-input ${errors.name ? 'input-error' : ''}`}
                            required 
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <input 
                            type="tel"
                            name="phone" 
                            placeholder="Teléfono" 
                            onChange={handleChange}
                            className="whatsapp-input"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="password"
                            name="password" 
                            placeholder="Contraseña" 
                            value={form.password}
                            onChange={handleChange}
                            className={`whatsapp-input ${errors.password ? 'input-error' : ''}`}
                            required 
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <button type="submit" className="whatsapp-btn" disabled={errors.name !== "" || errors.password !== ""}>
                        Ingresar
                    </button>
                </form>

                <div className="whatsapp-footer">
                    <p>Cifrado de extremo a extremo</p>
                </div>
            </div>
        </div>
    )
}