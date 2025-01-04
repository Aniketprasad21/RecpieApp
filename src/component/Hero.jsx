import React, { useEffect, useState } from 'react'
import style from "./hero.module.css"
import Background from "../assets/kerala1.jpg"
import Background1 from "../assets/goa1.jpg"
import Background2 from "../assets/Kashmir.jpg"
const Hero = () => {
  const images = [Background,Background1,Background2]
  const[currentIndex,setcurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setcurrentIndex((preIndex)=>(preIndex + 1)%images.length)
    },2000)
    return()=> clearInterval(interval);
  },[images.length])
  
  return (
    
    <div className={style.hero}>
      <h1 className={style.head}><span>Welcome to RAS Tour</span><br /> 
      <span>Your Journey Your Story!</span> 
      </h1>
      <span className={style.text}>Choose Your Favourite Destination</span>
      <button className={style.btn}>Travel Plan</button>
      <img 
      className = {style.heroimg} 
      src={images[currentIndex]} 
      alt={`Slide${currentIndex}`}
       />
       
    </div>
  )
}

export default Hero
