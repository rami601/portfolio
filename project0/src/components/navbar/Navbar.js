import React from 'react'
import style from './navbar.module.css'
const Navbar = () => {
  return (
    <div  className={style.navbar}>
        <span className={style.logo}>RAMI</span>

        <ul className={style.list}>
            <li className={style.listItem}> <a  href='#hero'>Home</a> </li>
            <li className={style.listItem}> <a href='#project'>Projects</a> </li>
            <li className={style.listItem}> <a href='#skill' > Skills</a></li>
        </ul>

        <button className={style.btn}>Let's Talk</button>
    </div>
  )
}

export default Navbar