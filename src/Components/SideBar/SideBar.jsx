import React, { useState } from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context/GlobalContext'
import { validarForm } from '../../helpers/validationHelpers'

const SideBar = ({ entorno, canalSeleccionado }) => {
    const { agregarCanal } = useGlobalContext()
    const [agregarNuevoCanal, setAgregarNuevoCanal] = useState(false)
    const [nombreNuevoCanal, setNombreNuevoCanal] = useState('')
    const [error, setError] = useState('')

    const handleAgregarCanal = () => {
        setAgregarNuevoCanal(true)
    }

    const handleCancelar = () => {
        setAgregarNuevoCanal(false)
        setNombreNuevoCanal('')
        setError('')
    }

    const handleCambioInput = (e) => {
        setNombreNuevoCanal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validarForm('', nombreNuevoCanal)
        if (errors.nombreCanal) {
            setError(errors.nombreCanal)
            return
        }
        agregarCanal(entorno.id, nombreNuevoCanal)
        setAgregarNuevoCanal(false)
        setNombreNuevoCanal('')
        setError('')
    }
    return (
        <div className='side-bar'>
            <span className='nombre-entorno-sb'>{entorno.nombreEntorno}</span>
            <span className='canales-span'>Canales</span>
            <ul className='lista-canales'>
                {entorno.canales.map(canal => (
                    <li key={canal.id} className={`canal-item ${canal.id === canalSeleccionado ? 'active' : ''}`}>
                        <i className="bi bi-hash"></i>
                        <Link to={`/workspace/${entorno.id}/${canal.id}`}>
                            {canal.nombreCanal}
                        </Link>
                    </li>
                ))}
                {!agregarNuevoCanal
                    ? (<li className='agregar-canal' onClick={handleAgregarCanal}>
                        <i className="bi bi-plus-lg"></i>
                        <span>Añadir canal</span>
                    </li>)
                    : (
                        <li className='agregar-canal-form'>
                            <form onSubmit={handleSubmit}>
                                <span className='span-form'>Añadir canal</span>
                                <input
                                    type='text'
                                    value={nombreNuevoCanal}
                                    onChange={handleCambioInput}
                                    placeholder='Nombre del nuevo canal'
                                    className='nuevo-canal-input'
                                />
                                {error && <p className='error-nuevo-canal'>{error}</p>}
                                <div className='botones-formulario'>
                                    <button className='confirmar-btn' type='submit'>Confirmar</button>
                                    <button className='cancelar-btn' type='button' onClick={handleCancelar}>Cancelar</button>
                                </div>
                            </form>
                        </li>
                    )
                }

            </ul>
        </div>
    )
}

export default SideBar
