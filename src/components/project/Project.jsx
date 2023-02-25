import React from 'react'
import './style.css'


const Project = ({project}) => {
    return (
        <li className="project">
            <a href="./project-page.html">
                <img src={project.img} alt={project.title} className="project__img" />
                <h3 className="project__title">{project.title}</h3>
            </a>
        </li>
    )
}

export default Project
