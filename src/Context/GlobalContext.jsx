import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerEntornosTrabajo, guardarEntornosTrabajo } from '../helpers/storageHelpers'
import { v4 as uuid } from 'uuid';

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    const [entornos, setEntornos] = useState([])
    const navigate = useNavigate()

        useEffect(() => {
            const datosEntornos = obtenerEntornosTrabajo()
            setEntornos(datosEntornos)
        }, [])

        const handleCreate = (nuevoEntorno) => {
            const nuevoEntornoconId = {...nuevoEntorno, id: uuid()}
            const entornosActualizados = [...entornos, nuevoEntornoconId]
            setEntornos(entornosActualizados)
            guardarEntornosTrabajo(entornosActualizados)
            navigate('/')
        }

        const handleCancel = () => {
            navigate('/')
        }

    return (
        <GlobalContext.Provider value={{
            entornos,
            handleCreate,
            handleCancel
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}