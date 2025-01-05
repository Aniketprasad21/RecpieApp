import React from 'react'
import HeroService from '../component/HeroService'
import Footer from '../component/Footer'
import Trip from "../component/Trip"
const service = () => {
  return (
    <div>
      <HeroService/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default service
