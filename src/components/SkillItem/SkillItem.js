import React from 'react'
import './SkillItem.scss'

export default function SkillItem ({ skill, img }) {
    return (
        <div className='skill-item'>
            <img src={ img } alt={ skill } />
            <p className='skill-desc'>{ skill }</p>
        </div>
    )
}
