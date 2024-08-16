import React from 'react'
import './DetailHeader.css'

const DetailHeader = ({ nombreEntorno }) => {
    
    return (
        <header className='detail-header'>
            <input 
            type='text' 
            className='input-busqueda'
            placeholder={`Buscar en ${nombreEntorno}`}
            />
        </header>
    )
}

export default DetailHeader
