import React from 'react'
import style from "./heroabout.module.css"
import forest from "../assets/forest.jpg"
const HeroAbout = () => {
  return (
    <>
        <div className={style.heroabout}>
            <img src={forest} alt="aboutimg" />
        </div>
    </>
  )
}


export default HeroAbout
