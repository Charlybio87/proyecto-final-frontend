import React, { useState } from 'react'
import './MessageInput.css'


const MessageInput = ({ onEnviarMensaje }) => {
    const [mensaje, setMensaje] = useState('')

    const handleChange = (e) => {
        setMensaje(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (mensaje.trim()) {
            onEnviarMensaje(mensaje)
            setMensaje('')
        }
    }
    return (
        <form onSubmit={handleSubmit} className='formulario-mensaje'>
            <input
                type='text'
                value={mensaje}
                onChange={handleChange}
                placeholder='Escriba un mensaje...'
                className='input-mensaje'
            />
            <button type='submit' className='boton-enviar'>
                Enviar
            </button>
        </form>
    )
}

export default MessageInput
