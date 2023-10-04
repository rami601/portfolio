import React from 'react'

// components
import Window from '../../components/window/Window'
import Text from '../../components/text/Text'
import Ball from '../../components/background/Ball'



//style
import style from './hero.module.css'



const Hero = () => {
  return (
    <div id='hero' className={style.hero}>

        
        <Text />
        <Window />
        <Ball />
    </div>
  )
}

export default Hero