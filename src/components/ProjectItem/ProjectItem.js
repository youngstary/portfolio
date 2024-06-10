import React from 'react'

export default function ProjectItem ({ title, text, link, img }) {
    return (
        <a href={ link } target="_blank" rel="noopener noreferrer">
            <div className='projects-container-item' >
                <img src={ img } alt={ title } />
                <h3>{ title }</h3>
                <p>{ text }</p>
            </div>
        </a>
    )
}
