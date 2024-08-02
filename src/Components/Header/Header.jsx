import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className='home-header'>
            <div className='slack-logo'>
                <img src="./assets/images/slack-logo.png" alt="Logo de slack" />
            </div>
            <div className='div-saludo'>
                <img src="./assets/images/waving-hand.png" alt="Mano saludando" />
                <h1>¡Hola de nuevo!</h1>
            </div>
        </header>
    )
}

export default Header
