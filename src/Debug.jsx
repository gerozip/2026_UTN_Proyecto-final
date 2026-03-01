import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'

export default function Debug() {
    const { user } = useContext(AuthContext)
    
    console.log('DEBUG - User:', user)
    
    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', fontFamily: 'monospace' }}>
            <h2>Debug Info</h2>
            <p>User state: {user ? JSON.stringify(user) : 'null (no user)'}</p>
            <p>User is defined: {user !== undefined ? 'true' : 'false'}</p>
            <p>User is null: {user === null ? 'true' : 'false'}</p>
        </div>
    )
}
