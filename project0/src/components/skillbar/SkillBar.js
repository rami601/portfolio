import React ,{useEffect ,useState} from 'react'
import style from './skillbar.module.css'
// import img from '../../img/bird.png'

const SkillBar = ({filled ,img ,color ,time}) => {

  const [fill ,setFill ] = useState(0)

  useEffect(()=> {
    if(fill < filled){
      setTimeout(() => setFill(prev => prev  += 2 ),60)
    }

  },[fill])
  return (
    <div className={style.skillBar}>
        <img className={style.img} src={img} />
        <div className={style.bar}>
            <div style={{
                height:"100%",
                width:`${fill}%`,
                backgroundColor: `${color}`,
                transition:`width .3s`,
                borderRadius:"5px",
            }}>

            </div>
        </div>
        <span className={style.num}>{fill}%</span>
    </div>
  )
}

export default SkillBar