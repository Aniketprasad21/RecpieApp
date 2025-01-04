import React, { Component } from 'react'
import TripData from './TripData'
import style from "./trip.module.css"

class Trip extends Component {
  render() {
    return (
      <div className={style.trip}>
        <h1>Recent Trips</h1>
        <p>You can discover unique desitination using Google Maps.</p>
        <div className={style.tripcard}></div>
        <TripData
        // image = {}
        />
      </div>
    )
  }
}
export default Trip
