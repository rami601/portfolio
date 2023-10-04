import React , {useState} from 'react'
import style from  './window.module.css'
import Img from '../../img/bees1.png'

const Window = () => {
  const [open , setOpen ] = useState(false)
  console.log(open)
  return (
    <div onClick={e => setOpen(!open)} className={style.window}>
      <img className={[style.img ,open ? style.tranImg : ''].join(' ') } src={Img} />
      
    </div>
  )
}

export default Window