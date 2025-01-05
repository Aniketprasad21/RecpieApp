import React from 'react'
import style from "./herocontact.module.css"
import Contact from "../assets/Contact.jpg"
const HeroContact = () => {
  return (
    <div className={style.herocontact}>  
      <img src={Contact} alt="Contactimg" />
    </div>
  )
}

export default HeroContact
