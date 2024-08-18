import React from 'react'
import './DetailHeader.css'
import { useNavigate } from 'react-router-dom'

const DetailHeader = ({ nombreEntorno }) => {
    const navigate = useNavigate()

    const handleSalir = () => {
        navigate('/')
    }
    
    return (
        <header className='detail-header'>
            <input 
            type='text' 
            className='input-busqueda'
            placeholder={`Buscar en ${nombreEntorno}`}
            />
            <button className='boton-salir' onClick={handleSalir}>Salir</button>
        </header>
    )
}

export default DetailHeader
