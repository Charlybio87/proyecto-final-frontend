import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

const SideBar = ({ entorno, canalSeleccionado }) => {
    return (
        <div className='side-bar'>
            <span className='nombre-entorno-sb'>{entorno.nombreEntorno}</span>
            <ul className='lista-canales'>
                {entorno.canales.map(canal => (
                    <li key={canal.id} className={`canal-item ${canal.id === canalSeleccionado ? 'active' : ''}`}>
                        <i className="bi bi-hash"></i>
                        <Link to={`/workspace/${entorno.id}/${canal.id}`}>
                            {canal.nombreCanal}
                        </Link>
                    </li>
                ))}
                <li className='agregar-canal'>
                    <i className="bi bi-plus-lg"></i>
                    <span>Añadir canal</span>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
