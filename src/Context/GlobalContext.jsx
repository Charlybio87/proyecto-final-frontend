import { createContext, useContext, useEffect, useState } from "react";
import { obtenerEntornosTrabajo } from '../helpers/storageHelpers'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    const [entornos, setEntornos] = useState([])

        useEffect(() => {
            const datosEntornos = obtenerEntornosTrabajo()
            setEntornos(datosEntornos)
        }, [])

        const handleCreate = (nuevoEntorno) => {
            // Aca me falta logica para agregar el nuevo entorno a la lista de entornos
            setEntornos(prevEntornos => [...prevEntornos, nuevoEntorno])
        }

        const handleCancel = () => {

            // Aca me falta la logica para manejar la cancelacion
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