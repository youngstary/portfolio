import React from 'react'
import './Contact.scss'
import { IoMdMail, IoMdCall } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

export default function Contact () {
  return (
    <div id='contact' className='contact'>
      <h2>Contact</h2>
      <div>
        <div className='contact-item'>
          <RiMapPin2Fill />
          <p>Kraków <span className='line'>|</span> Nowe Brzesko</p>
        </div>
        <div className='contact-item'>
          <IoMdMail />
          <p>sbartosik17@gmail.com</p>
        </div>
        <div className='contact-item'>
          <IoMdCall />
          <p>+48 575 200 404</p>
        </div>
        <a href="https://www.linkedin.com/in/sebastian-bartosik-747ab724b/" target="_blank" rel="noopener noreferrer">
          <div className='contact-item contact-clickable'>
            <FaLinkedin />
            <p>Sebastian Bartosik</p>
          </div>
        </a>
        <a href="https://github.com/youngstary" target="_blank" rel="noopener noreferrer">
          <div className='contact-item contact-clickable'>
            <FaGithub />
            <p>youngstary</p>
          </div>
        </a>
      </div>
    </div>
  )
}
