import React from 'react'
import Ball from '../../components/background/Ball'
import SkillCard from '../../components/skillcard/SkillCard'
import SkillText from '../../components/skilltext/SkillText'
import style from './skill.module.css'
const Skill = () => {
  return (
    <div id='skill' className={style.skill}>
        
        <SkillCard />
        <SkillText />


    

        <Ball />
    </div>
  )
}

export default Skill