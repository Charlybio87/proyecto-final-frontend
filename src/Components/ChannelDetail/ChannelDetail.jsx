import React from 'react'
import './ChannelDetail.css'
import MessageInput from '../MessageInput/MessageInput';
import { useGlobalContext } from '../../Context/GlobalContext';


const ChannelDetail = ({ canal, entorno }) => {
    const { agregarMensaje } = useGlobalContext()

    const obtenerFotoAutor = (autor) => {
        const miembro = entorno.miembros.find(miembro => miembro.nombreMiembro === autor)
        return miembro ? miembro.fotoPerfil : ''
    }

    const handleEnviarMensaje = (contenido) => {
        if (contenido.trim()) {
            agregarMensaje(entorno.id, canal.id, contenido)
        }
    }
    return (
        <div className='detalle-canal'>
            <header className='header-canal'>
                <span>{canal.nombreCanal}</span>
            </header>
            <div className='mensajes'>
                {canal.mensajes.map(mensaje => (
                    <div key={mensaje.id} className='mensaje' >
                        <div className='header-mensaje'>
                            <img width='100px' src={obtenerFotoAutor(mensaje.autor)} alt={`Foto de perfil de ${mensaje.autor}`} className='avatar-mensaje' />
                            <span className='autor-mensaje'>{mensaje.autor}</span>
                            <span className='hora-mensaje'>{mensaje.hora}</span>
                        </div>
                        <p className='texto-mensaje'>{mensaje.contenido}</p>
                    </div>
                ))}
            </div>
            <MessageInput onEnviarMensaje={handleEnviarMensaje}/>
        </div>
    )
}

export default ChannelDetail
