import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerEntornosTrabajo, guardarEntornosTrabajo, obtenerUsuarioLogueado, agregarNuevoMensaje } from '../helpers/storageHelpers'
import { v4 as uuid } from 'uuid';

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [entornos, setEntornos] = useState([])
    const [usuarioLogueado, setUsuarioLogueado] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const datosEntornos = obtenerEntornosTrabajo()
        setEntornos(datosEntornos)
        const datosUsuario = obtenerUsuarioLogueado()
        setUsuarioLogueado(datosUsuario)
    }, [])

    const handleCreate = (nuevoEntorno) => {
        const nuevoEntornoconId = {
            ...nuevoEntorno,
            id: uuid(),
            canales: [
                {
                    ...nuevoEntorno.canales[0],
                    id: uuid()
                }
            ]
        }
        const entornosActualizados = [...entornos, nuevoEntornoconId]
        setEntornos(entornosActualizados)
        guardarEntornosTrabajo(entornosActualizados)

        navigate('/')
    }

    const handleCancel = () => {
        navigate('/')
    }

    const handleCreateWorkspace = () => {
        navigate('/workspace/new')
    }

    const agregarMensaje = (idEntorno, idCanal, contenido) => {
        const nuevoMensaje = {
            id: uuid(),
            contenido,
            autor: usuarioLogueado.nombre,
            fecha: new Date().toLocaleDateString(),
            hora: new Date().toLocaleTimeString()
        }
        const entornosActualizados = agregarNuevoMensaje(idEntorno, idCanal, nuevoMensaje)
        setEntornos(entornosActualizados)
    }
    return (
        <GlobalContext.Provider value={{
            entornos,
            usuarioLogueado,
            handleCreate,
            handleCancel,
            handleCreateWorkspace,
            agregarMensaje
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}