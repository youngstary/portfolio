import React from 'react'
import './SkillItem.scss'

export default function SkillItem ({ skill, img }) {
    return (
        <div className='skill-item'>
            <img src={img} alt={skill} />
            <h3 className='skill-desc'>{ skill }</h3>
        </div>
    )
}
