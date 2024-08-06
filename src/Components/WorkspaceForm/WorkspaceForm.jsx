import React, { useState } from 'react'
import './WorkspaceForm.css'

const WorkspaceForm = ({ onCreate, onCancel }) => {
    const [nombreEntorno, setNombreEntorno] = useState('')
    const [nombreCanal, setNombreCanal] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const nuevoEntorno = { 
            nombreEntorno, 
            nombreCanal,
            fotoEntorno: '/assets/images/workspaces/nuevo-workspace.png',
            miembros: []
    }
        onCreate(nuevoEntorno)
    }
    return (
        <form className='form-nuevo-entorno' onSubmit={handleSubmit}>
            <label htmlFor="nombre-entorno">Nombre del entorno de trabajo:</label>
            <input
                type="text"
                id='nombre-entorno'
                value={nombreEntorno}
                onChange={(e) => setNombreEntorno(e.target.value)}
                placeholder='Introduce el nombre del entorno'
                required
            />
            <label htmlFor="nombre-canal">Nombre del canal #:</label>
            <input
                type="text"
                id='nombre-canal'
                value={nombreCanal}
                onChange={(e) => setNombreCanal(e.target.value)}
                placeholder='Introduce el nombre del canal'
                required
            />
            <div className='botones-form'>
                <button type='submit' className='btn-crear-entorno'>Crear entorno</button>
                <button type='button' onClick={onCancel} className='btn-cancelar'>Cancelar</button>
            </div>
        </form>
    )
}

export default WorkspaceForm
