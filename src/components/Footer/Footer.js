import React from 'react'
import './Footer.scss'
import { FaReact } from "react-icons/fa";

export default function Footer () {
  return (
    <footer>
      <p>Sebastian Bartosik 2024 | website powered by <div className='react'><FaReact style={ { color: "#61dbfb" } } />React.js</div> (work in progress)</p>
    </footer>
  )
}
