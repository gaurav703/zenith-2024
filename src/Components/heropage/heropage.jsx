import React from "react";
import "./heropage.css";
import player from "../../Images/player.png";
import ball from "../../Images/ball.png";
import logo from "../../Images/logo.png";
import Atropos from "atropos/react";
import Timer from "../timer/timer";
import zenithLogo from "../../Images/zenith_logo.png";

export default function Heropage() {
  return (
    <div className="heropage-main-div">
      <div className="head-heading">
        <img src={zenithLogo} alt="zenithlogo" />
      </div>
      <Atropos>
        <img
          data-atropos-offset="-8"
          id="player"
          src="https://res.cloudinary.com/dqki29mbg/image/upload/v1707291433/Zenith-24/d9ksa7t1vfabnekcm4yj.png"
          alt="player"
        ></img>
        <img
          data-atropos-offset="20"
          id="ball"
          src="https://res.cloudinary.com/dqki29mbg/image/upload/v1707291431/Zenith-24/hgmvpkfuisyqzzsprgo3.png"
          alt="ball"
          className="balls"
        ></img>
      </Atropos>
      <div className="countdown">
        <Timer date="February 23 2024" />
      </div>
    </div>
  );
}
