import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import Header from '../../Components/Header/Header'
import WorkspacesContainer from '../../Components/WorkspacesContainer/WorkspacesContainer'
import './Home.css'


const Home = () => {
    const { entornos } = useContext(GlobalContext)

    return (
        <div className='app-container'>
            <Header/>
            <WorkspacesContainer entornos={entornos}/>
        </div>
    )
}

export default Home
