import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import HeaderAndLogo from '../../Components/HeaderAndLogo/HeaderAndLogo'
import WorkspacesContainer from '../../Components/WorkspacesContainer/WorkspacesContainer'



const Home = () => {
    const { entornos } = useContext(GlobalContext)

    return (
        <div className='app-container'>
            <HeaderAndLogo/>
            <WorkspacesContainer entornos={entornos}/>
        </div>
    )
}

export default Home
