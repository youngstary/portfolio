import React from 'react'
import { Link } from "react-scroll";
import './MenuItem.scss'

export default function MenuItem ({ text, section }) {
    return (
        <Link activeClass="active" to={ section } spy={ true } smooth={ true } offset={ -70 } duration={ 500 } className='menu-item'>{ text }</Link>
    )
}
