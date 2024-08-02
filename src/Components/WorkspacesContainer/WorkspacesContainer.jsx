import React from 'react'
import WorkspaceItem from '../WorkspaceItem/WorkspaceItem'
import { Link } from 'react-router-dom'
import './WorkspacesContainer.css'

const WorkspacesContainer = ({ entornos }) => {
    return (
        <div className='workspaces-container'>
            <div className='workspaces-header'>
                <h2>Espacios de trabajo para juan123@gmail.com</h2>
                <div className='lista-entornos'>
                    {entornos.map((entorno) => (
                        <WorkspaceItem key={entorno.id} entorno={entorno} />
                    ))}
                </div>
            </div>
            <div className='crear-workspace-container'>
                <p>¿Quieres usar Slack con otro equipo?</p>
                <Link to='/workspace/new'>
                <button className='btn-crear-nuevo'>CREAR UN NUEVO ESPACIO DE TRABAJO</button>
                </Link>  
            </div>
        </div>
    )
}

export default WorkspacesContainer
