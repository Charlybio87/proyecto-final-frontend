import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='home-header'>
            <nav className='header-nav'>
            <div className='logo-container'>
                <img src="./assets/images/slack-logo.png" alt="Logo de slack" />
            </div>
            <button className='btn-crear-nuevo-header'><Link to='/workspace/new'>CREAR UN NUEVO ESPACIO DE TRABAJO</Link></button>
            </nav>
        </header>
    )
}

export default Header
