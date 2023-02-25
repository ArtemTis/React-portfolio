import React from 'react'

import Project from '../components/project/Project'
import { projects } from '../helpers/projectsList';

const Progects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects.map((project, index) => <Project key={project.title} project={project} index={index}/>)}

                </ul>
            </div>
        </main>
    )
}

export default Progects