import React from 'react'
import { Link } from 'react-router'

export default function ErrorNotFoundScreen() {
  return (
    <div>
        <h1>404 - Pagina no encontrada</h1>
        <p>La pagina solicitada no ha sido encontrada</p>
        <Link to="/">Volver a la pagina principal</Link>
    </div>
  )
}
