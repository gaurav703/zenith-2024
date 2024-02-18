import React from "react";
import "./footer.css";
import logo from "../Images/logo.png";
import logo2 from "../Images/logo2.png";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import map from "../Images/map.png";

import { MapContainer, TileLayer, useMap } from "react-leaflet";

const Footer = () => {
  return (
    <div className="parent">
      <div className="main_con">
        <div className="logo">
          <img src={logo2}></img>
        </div>
        <div className="middle">
          <ul className="ul">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Event</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
          <button>View Brochure</button>
          <div className="social">
            <ul className="ulsocila">
              <li>
                <a href="https://www.instagram.com/zenith_sggs?igsh=djNob2lwbXg2aGdi">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="mailto:zenith@sggs.ac.in">
                  <Mail />
                </a>
              </li>
              <li>
                <a href="https://sggszenith.in/tel:+919359502953">
                  <Phone />
                </a>
              </li>
              <li>
                <a href="https://goo.gl/maps/qdH2ab7UjYGfyPJs6">
                  <MapPin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8903382147096!2d77.28986337520624!3d19.1124661820997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29b9903d053d%3A0x2c5238a90ab55c03!2sShri%20Guru%20Gobind%20Singhji%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1707137303264!5m2!1sen!2sin"
            style={{
              width: "400",
              height: "300",
              allowFullScreen: "",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </div>
      </div>
      <div className="bottom">
        <div className="social">
          <ul className="ulsocila">
            <li>
              <a href="https://www.instagram.com/zenith_sggs?igsh=djNob2lwbXg2aGdi">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="mailto:zenith@sggs.ac.in">
                <Mail />
              </a>
            </li>
            <li>
              <a href="https://sggszenith.in/tel:+919359502953">
                <Phone />
              </a>
            </li>
            <li>
              <a href="https://goo.gl/maps/qdH2ab7UjYGfyPJs6">
                <MapPin />
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <p>©2024 Zenith Web Team | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
