import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { validarForm } from '../../helpers/validationHelpers'
import './WorkspaceForm.css'

const WorkspaceForm = () => {
    const { handleCreate, handleCancel } = useContext(GlobalContext)
    const [nombreEntorno, setNombreEntorno] = useState('')
    const [nombreCanal, setNombreCanal] = useState('')
    const [errors, setErrors] = useState({})
    const [formEnviado, setFormEnviado] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormEnviado(true)

        const formData = new FormData(event.target)
        const formErrors = validarForm(nombreEntorno, nombreCanal)
        setErrors(formErrors)

        if(Object.keys(formErrors).length === 0) {
            const nuevoEntorno = { 
                nombreEntorno: formData.get('nombreEntorno'), 
                nombreCanal: formData.get('nombreCanal'),
                fotoEntorno: '/assets/images/workspaces/nuevo-workspace.png',
                miembros: []
        }
        handleCreate(nuevoEntorno)
        }
    }

    return (
        <form className='form-nuevo-entorno' onSubmit={handleSubmit}>
            <label htmlFor="nombreEntorno">Nombre del entorno de trabajo:</label>
            <input
                type="text"
                id='nombreEntorno'
                name='nombreEntorno'
                value={nombreEntorno}
                onChange={(e) => setNombreEntorno(e.target.value)}
                placeholder='Introduce el nombre del entorno'
            />
            {formEnviado && errors.nombreEntorno && <span className='mensaje-error'>{errors.nombreEntorno}</span>}

            <label htmlFor="nombreCanal">Nombre del canal #:</label>
            <input
                type="text"
                id='nombreCanal'
                name='nombreCanal'
                value={nombreCanal}
                onChange={(e) => setNombreCanal(e.target.value)}
                placeholder='Introduce el nombre del canal'
            />
            {formEnviado && errors.nombreCanal && <span className='mensaje-error'>{errors.nombreCanal}</span>}

            <div className='botones-form'>
                <button type='submit' className='btn-crear-entorno'>Crear entorno</button>
                <button type='button' onClick={handleCancel} className='btn-cancelar'>Cancelar</button>
            </div>
        </form>
    )
}

export default WorkspaceForm
