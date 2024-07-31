import React from 'react'

const Home = () => {
    return (
        <div className='app-container'>
            <div className='slack-logo'>
                <img src="./assets/images/slack-logo.png" alt="" />
            </div>
            <div className='header'>
                <img src="./assets/images/waving-hand.gif" alt="mano saludando" />
                <h1>¡Hola de nuevo!</h1>
            </div>
            <div className='workspaces-container'>
                <h2>Espacios de trabajo para pepe123@gmail.com</h2>
                <div className='imagen-workspace'>
                    <img src="" alt="" />
                </div>
                <div className='detalle-workspace'>
                    <span>Nombre del Workspace</span>
                    <div className='detalle-miembros'>
                        <div className='imagenes-miembros'>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <span className='cantidad-miembros'>Cantidad de miembros</span>
                    </div>
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
