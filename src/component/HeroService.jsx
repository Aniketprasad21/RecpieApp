import React from 'react'
import style from "./heroservice.module.css"
import Tree from "../assets/Tree.jpg"
const HeroService = () => {
  return (
    <div className={style.heroservice}>
      <img src={Tree} alt="Serviceimg" />
    </div>
  )
}

export default HeroService
