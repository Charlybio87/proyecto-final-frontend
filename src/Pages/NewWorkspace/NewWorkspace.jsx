import React, { useContext } from 'react'
import WorkspaceForm from '../../Components/WorkspaceForm/WorkspaceForm'
import { GlobalContext } from '../../Context/GlobalContext'
import './NewWorkspace.css'

const NewWorkspace = () => {
    const { handleCreate, handleCancel } = useContext(GlobalContext)
    return (
        <div className='nuevo-entorno-container'>
            <div className='logo-container-nuevo-workspace'>
                <img src="/assets/images/slack-logo.png" alt="Logo de slack" />
            </div>
            <div className='content-container'>
            <div className='form-container'>
                <h1>Crea un nuevo espacio de trabajo de Slack</h1>
                <WorkspaceForm onCreate={handleCreate} onCancel={handleCancel} />
            </div>
            <div className='nuevo-worspace-img'>
            <img src="/assets/images/new-workspace.png" alt="Compañeros de trabajo interactuando" />
            </div>
            </div>
            
        </div>
    )
}

export default NewWorkspace
