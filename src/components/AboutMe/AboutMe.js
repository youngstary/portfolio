import React from 'react'
import './AboutMe.scss'
import placeholder from '../../assets/placeholder.png'

export default function AboutMe () {
  return (
    <div id='about-me' className='about-me'>
      <section>
        <h2>About Me</h2>
        <p>
          I am a graduate of a technical high school. I plan to continue my education and start university this year. For many years, I have been passionate about the broadly defined field of computer science. In school, I acquired a lot of skills.
        </p>
        <p>
          I learned administration and configuration of operating systems, including Windows 10/11, Windows Server and Linux. I also learned how to configure simple local networks on TP-Link devices.
        </p>
        <p>
          I started my programming journey with the basics of HTML and CSS, through JavaScript, and ending with popular technologies such as React and Spring Boot. Currently, I am developing my skills on my own with the help of tutorials and working on projects that will help me become a better programmer!
        </p>
      </section>
      <section>
        <h2>Goals for 2024</h2>
        <div className='goals'>
          <div className='goals-item'>master React</div>
          <div className='goals-item'>master Spring Boot</div>
          <div className='goals-item'>learn Flask</div>
          <div className='goals-item'>learn C++</div>
          <div className='goals-item'>learn C#</div>
        </div>
      </section>
      <section className='picture-container'>
        <h2>Picture</h2>
        <img src={ placeholder } alt="my pic" />
      </section>
    </div>
  )
}
