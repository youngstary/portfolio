import React from 'react'
import './Projects.scss'
import ProjectItem from '../ProjectItem/ProjectItem'
import migz from '../../assets/migz.png'
import math from '../../assets/math.png'
import minesweeper from '../../assets/minesweeper.png'

export default function Projects () {
    return (
        <div id='projects' className='projects'>
            <div className='projects-container'>
                <ProjectItem
                    title="Math Graphs 2023"
                    text="Application that draws graph of a given function. I wanted to learn Canvas by doing this project."
                    link="https://youngstary.github.io/math-graphs/"
                    img={ math }
                />
                <ProjectItem
                    title="Migz The Game 2022"
                    text="Simple game made in JavaScript for my girlfriend. You play as her dog Migz. Try to catch lots of her favorite snacks!"
                    link="https://youngstary.github.io/migz-the-game/"
                    img={ migz }
                />
                <ProjectItem
                    title="Minesweeper 2022"
                    text="Classic minesweeper game made for a school project. Customizable map and leaderboard made with cookies!"
                    link="https://youngstary.github.io/minesweeper/"
                    img={ minesweeper }
                />
                <ProjectItem
                    title="Minesweeper 2022"
                    text="Classic minesweeper game made for a school project. Customizable map and leaderboard made with cookies!"
                    link="https://youngstary.github.io/minesweeper/"
                    img={ minesweeper }
                />
            </div>
            <h2>Projects</h2>
        </div>
    )
}
