import React from "react";
import "./icons.css";
import Youtube from "../Images/youtube.png";
import Calender from "../Images/calendar.png";
import Badge from "../Images/premium-badge.png";
export default function Icon() {
  return (
    <div className="icons">
      <div className="icons-list youtube">
        <img src={Youtube} className="image"/>
        <h1>7 Sports</h1>
        <p>Over 7 sports and games</p>
      </div>
      <div className="icons-list calender">
        <img src={Calender} className="image"/>
        <h1>7 Years</h1>
        <p>7 years of successfull execution</p>
      </div>
      <div className="icons-list badge">
        <img src={Badge} className="image"/>
        <h1>445000 + Prize</h1>
        <p>Prize worth 4.45L to be won</p>
      </div>
    </div>
  );
}
