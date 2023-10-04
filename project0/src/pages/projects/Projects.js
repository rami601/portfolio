import React from 'react'
import Ball from '../../components/background/Ball'
import ProjectCard from '../../components/projectCard/ProjectCard'
import style from './projects.module.css'

const Projects = () => {
  return (
    <div id='project' className={style.project}>

        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        <Ball />
        
    </div>
  )
}

export default Projects