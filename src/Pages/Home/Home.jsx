import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import Header from '../../Components/Header/Header'
import WorkspacesContainer from '../../Components/WorkspacesContainer/WorkspacesContainer'
import './Home.css'


const Home = () => {
    const { entornos } = useContext(GlobalContext)

    return (
        <div className='app-container'>
            <Header />
            <main className='contenedor-main'>
                <div className='content-wrapper'>
                    <div className='div-saludo'>
                        <img src="./assets/images/waving-hand.png" alt="Mano saludando" />
                        <h1>¡Hola de nuevo!</h1>
                    </div>
                    <WorkspacesContainer entornos={entornos} />
                </div>
            </main>

        </div>
    )
}

export default Home
