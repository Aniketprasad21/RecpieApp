import React from 'react'
import style from "./trip.module.css"

function TripData(props) {
  return (
    <div className={style.tcard}>
      <div className={style.timage}>

        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}
export default TripData;