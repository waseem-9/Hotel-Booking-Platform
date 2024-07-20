import React from "react";
import video1 from "../images/video2.mp4";
import './Video.css';

const Video=()=>{
    return(
        <>
          <div className="App">
      <video autoPlay loop muted id="background-video">
        <source src={video1} type="video/mp4" />
      </video>
      <div className="overlay">
      <p id="top-text">HolidayZz.com</p>
      <p id="bottom-text">Welcomes You All</p>
      </div>
    </div>
        </>
    )
}
export default Video;