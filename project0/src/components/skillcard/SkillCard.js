import React from 'react'
import SkillBar from '../skillbar/SkillBar'
import style from './skillcard.module.css'
import img1 from '../../img/1.png'
import img2 from '../../img/2.png'
import img3 from '../../img/3.png'
import img4 from '../../img/4.png'
import img5 from '../../img/5.png'
const SkillCard = () => {

    const custombar = {
        transform: ' translateX(  calc(-100% - -10%));',
    }
  return (
    <div className={style.skillCard}>
        <SkillBar img={img1} filled={80} color={'cyan'}  time={2}/>
        <SkillBar img={img2} filled={70} color={'cyan'} time={4} />
        <SkillBar img={img3} filled={85} color={'cyan'} time={2} />
        <SkillBar img={img4} filled={79} color={'cyan'} time={3} />
        <SkillBar img={img5} filled={95} color={'cyan'} time={4} />



    </div>
  )
}

export default SkillCard