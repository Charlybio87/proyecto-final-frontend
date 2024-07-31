import React from 'react'
import { obtenerEntornosTrabajo } from '../../helpers/storageHelpers'

const Home = () => {
    const entornos = obtenerEntornosTrabajo()

    return (
        <div className='app-container'>
            <div className='slack-logo'>
                <img src="./assets/images/slack-logo.png" alt="" />
            </div>
            <div className='header'>
                <img src="./assets/images/waving-hand.png" alt="mano saludando" />
                <h1>¡Hola de nuevo!</h1>
            </div>
            <div className='workspaces-container'>
                <h2>Espacios de trabajo para juan123@gmail.com</h2>
                <div className='lista-entornos'>
                    {entornos.map((entorno) => {
                        return (
                            <div key={entorno.id} className='entorno-item'>
                                <div className='imagen-entorno'>
                                    <img src={entorno.fotoEntorno} alt={entorno.nombreEntorno} />
                                </div>
                                <div className='detalle-entorno'>
                                    <span className='nombre-entorno'>{entorno.nombreEntorno}</span>
                                    <div className='detalle-miembros'>
                                        <div className='imagenes-miembros'>
                                            {entorno.miembros.slice(0,4).map(miembro => (
                                                // width momentaneo dsp pasarlo a css
                                                <img width='100px' key={miembro.id} src={miembro.fotoPerfil} alt={miembro.nombreMiembro} />
                                            ))}
                                        </div>
                                        <span className='cantidad-miembros'>
                                            {entorno.miembros.length} miembros
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button>INICIAR SLACK</button>
            </div>
            <div className='crear-workspace-container'>
                <p>¿Quieres usar Slack con otro equipo?</p>
                <button>CREAR UN NUEVO ESPACIO DE TRABAJO</button>
            </div>
        </div>
    )
}

export default Home
