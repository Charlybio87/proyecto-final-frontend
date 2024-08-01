import React, { useContext } from 'react'
import WorkspaceForm from '../../Components/WorkspaceForm/WorkspaceForm'
import { GlobalContext } from '../../Context/GlobalContext'

const NewWorkspace = () => {
    const { handleCreate, handleCancel } = useContext(GlobalContext)
    return (
        <div className='nuevo-entorno-container'>
            <h1>Crea un entorno de trabajo</h1>
                <WorkspaceForm onCreate={handleCreate} onCancel={handleCancel} />
        </div>
    )
}

export default NewWorkspace
