import React, { useState } from "react";
import "./navbar.css";
// import menu from "../../Images/menu.png";
// import close from "../../Images/closeMenu.png";
// import logo from "../../Images/logo.png";
import pdf from "../Event/Zenith.pdf";

export default function Navbar({ activePage }) {
  const [c, setC] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  
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
    setMenuOpen(!menuOpen);
    if (c === 0) {
      document.getElementById("menu-ul").style.display = "flex";
      setC(1);
    } else {
      document.getElementById("menu-ul").style.display = "none";
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
        <ul id="menu-ul" className="ppp">
          {/* <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/events">EVENTS</a>
          </li> */}
          <li>
          <a href="/" className={activePage === 'home' ? 'active' : ''}>HOME</a>
        </li>
        <li>
          <a href="/events" className={activePage === 'events' ? 'active' : ''}>EVENTS</a>
        </li>
          {/* <li>
            <a href="/">OUR TEAM</a>
          </li> */}

          <a href="https://forms.gle/LRbsX9pw59sUtLJh6" className="middle2" target="_blank">Register </a>

          <a className="middle2" onClick={() => download(pdf)}>
            Brochure
          </a>
        </ul>
        <img
        src={menuOpen ? "https://res.cloudinary.com/ddaxlm9yc/image/upload/v1707415323/qwci9r7kssikt8oc2o2w.png" : "https://res.cloudinary.com/ddaxlm9yc/image/upload/v1707415322/xccapucfk09qn2idc1en.png"}
          alt="logo"
          className="hamb"
          onClick={handleMenu}
        />
      </div>
    </div>
  );
}
