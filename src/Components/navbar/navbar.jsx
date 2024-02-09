import React, { useState } from "react";
import "./navbar.css";
import menu from "../../Images/menu.png";
import close from "../../Images/closeMenu.png";
import logo from "../../Images/logo.png";
import pdf from "../Event/Zenith.pdf";

export default function Navbar() {
  const [c, setC] = useState(0);
  const [imgSrc, setImgSrc] = useState(
    "https://res.cloudinary.com/ddaxlm9yc/image/upload/v1707415323/qwci9r7kssikt8oc2o2w.png"
  );

  function download(pdfpath) {
    const pdfUrl = pdfpath;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleMenu = () => {
    if (c === 0) {
      document.getElementById("menu-ul").style.display = "flex";
      setImgSrc(menu);
      setC(1);
    } else {
      document.getElementById("menu-ul").style.display = "none";
      setImgSrc(close);
      setC(0);
    }
  };

  return (
    <div className="navbar-main-div">
      <div className="logo-black-div">
        <div className="logo-black-inner-div">
          <img
            src="https://res.cloudinary.com/dqki29mbg/image/upload/v1707291527/Zenith-24/rezgbpiqvujpjowazump.png"
            alt="logo"
            className="logoss"
          />
        </div>
      </div>
      <div className="navbar-inner-div">
        <ul id="menu-ul">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/events">EVENTS</a>
          </li>
          {/* <li>
            <a href="/">OUR TEAM</a>
          </li> */}

          <a className="middle2">Register</a>

          <a className="middle2" onClick={() => download(pdf)}>
            Brochure
          </a>
        </ul>
        <img
          src="https://res.cloudinary.com/ddaxlm9yc/image/upload/v1707415322/xccapucfk09qn2idc1en.png"
          alt="logo"
          className="hamb"
          onClick={handleMenu}
        />
      </div>
    </div>
  );
}
