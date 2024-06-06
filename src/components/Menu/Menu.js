import React from 'react'
import './Menu.scss'
import MenuItem from '../MenuItem/MenuItem'

export default function Menu () {
    return (
        <div className='menu'>
            <MenuItem text={ "Home" } section={ "banner" } />
            <MenuItem text={ "About Me" } section={ "about-me" } />
            <MenuItem text={ "Projects" } section={ "projects" } />
            <MenuItem text={ "Contact" } section={ "contact" } />
        </div>
    )
}
