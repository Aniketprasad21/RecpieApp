import React, { Component } from "react";
import style from "./destination.module.css";
class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={style.destext}>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className={style.image}>
          <video
            className={style.video}
            src={this.props.video}
            controls
            autoPlay
            loop
            muted
          ></video>
          <img src={this.props.image} alt="Jog Falls" />
        </div>
      </div>
    );
  }
}
export default DestinationData;
