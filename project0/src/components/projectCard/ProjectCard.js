import React from 'react'
import style from './projectcard.module.css'
import img from '../../img/1.png'

const ProjectCard = () => {
  return (
    <div className={style.card}>
        <img className={style.img} src={img} />
        <h3 className={style.title}>Restorant </h3>
        <p className={style.subTitle}>this is a resturant project that i made you can visit it and see my work live</p>
        <button className={style.btn}>Visit</button>
    </div>
  )
}

export default ProjectCard