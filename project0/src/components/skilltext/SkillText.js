import React from 'react'
import style from './skilltext.module.css'
import img from '../../img/bird.png'

const SkillText = () => {
  return (
    <div className={style.skillText}>
      <img className={style.img} src={img} />

      <div className='textItem'>
        <h3 className={style.title}>fast</h3>
        <p className={style.subTitle}> i know your valueable time so i put all my time and work hard to delever a high quality work</p>

      </div>
      <div className='textItem'>
        <h3 className={style.title}>mantainble </h3>
        <p  className={style.subTitle}> i know your valueable time so i put all my time and work hard to delever a high quality work</p>

      </div>
      <div className='textItem'>
        <h3 className={style.title} >cheep</h3>
        <p  className={style.subTitle}> i know your valueable time so i put all my time and work hard to delever a high quality work</p>

      </div>

    </div>
  )
}

export default SkillText