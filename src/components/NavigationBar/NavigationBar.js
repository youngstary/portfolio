import React from 'react'
import './NavigationBar.scss'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

export default function NavigationBar () {
    return (
        <nav>
            <Logo />
            <Menu />
        </nav>
    )
}
