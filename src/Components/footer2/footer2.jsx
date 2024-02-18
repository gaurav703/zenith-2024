import styles from "./footer2.module.css";
import React from "react";
import logo from "../Images/logo.png";
import logo2 from "../Images/logo2.png";
import { Instagram } from "lucide-react";
import { useState } from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { MessageCircleCode } from "lucide-react";
import pdf from "../Event/Zenith.pdf";

const Footer2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  function download(pdfpath) {
    const pdfUrl = pdfpath;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className={styles.whole}>
      <div className={styles.up}>
        <div className={styles.left}>
          <img src={logo} className={styles.img} alt="image"></img>
        </div>
        <div className={styles.middle}>
          <div className={styles.middle1}>
            <div className={styles.ul}>
              <div className={styles.links}>
                <a href="/">HOME</a>
              </div>
              <div className={styles.links}>
                <a href="/events">EVENT</a>
              </div>
              {/* <div className={styles.links}>
                <a href="#">OUR TEAM</a>
              </div> */}
              <div className={styles.links}>
                <a href="/">REGISTER</a>
              </div>
            </div>
          </div>
          <div className={styles.middle2} onClick={() => download(pdf)}>
            View Brochure
          </div>
          <div className={styles.middle3}>
            <div className={styles.ulsocila}>
              <div>
                <a
                  href="https://www.instagram.com/zenith_sggs?igsh=djNob2lwbXg2aGdi"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    transform: isHovered
                      ? "transformY(10px)"
                      : "transformY(0px)",
                  }}
                >
                  <Instagram color={isHovered ? "#ff8503" : "#fff"} />
                </a>
              </div>
              <div>
                <a
                  href="mailto:zenith@sggs.ac.in"
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  <Mail color={isHovered2 ? "#ff8503" : "#fff"} />
                </a>
              </div>
              <div>
                <a
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                >
                  <Phone color={isHovered3 ? "#ff8503" : "#fff"} />
                </a>
              </div>
              <div>
                <a
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                >
                  <MessageCircleCode color={isHovered4 ? "#ff8503" : "#fff"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <iframe
            className={styles.mapp}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8903382147096!2d77.28986337520624!3d19.1124661820997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29b9903d053d%3A0x2c5238a90ab55c03!2sShri%20Guru%20Gobind%20Singhji%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1707137303264!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      <div className={styles.down}>
        ©2024 Zenith Web Team | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer2;
