import React from "react";
import "../Icons/icons.css";

export default function Icon() {
  return (
    <div className="icons">
      <div className="icons-list youtube">
        <img
          src="https://res.cloudinary.com/dqki29mbg/image/upload/v1708276240/Zenith-24/suevvgq3qeg4mbj6nrg0.png"
          className="image"
        />
        <h1>7 Sports</h1>
        <p>Over 7 sports and games</p>
      </div>
      <div className="icons-list calender">
        <img
          src="https://res.cloudinary.com/dqki29mbg/image/upload/v1708276241/Zenith-24/duj11r2akxkajy4cudn6.png"
          className="image"
        />
        <h1>7 Years</h1>
        <p>7 years of successfull execution</p>
      </div>
      <div className="icons-list badge">
        <img
          src="https://res.cloudinary.com/dqki29mbg/image/upload/v1708276241/Zenith-24/jn0kzkeptkkhjemlzryp.png"
          className="image"
        />
        <h1>4Lakh + Prize</h1>
        <p>Prize worth up to 4Lakh</p>
      </div>
    </div>
  );
}
