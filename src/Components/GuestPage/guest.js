import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "./guest.css";
import React, { useState } from "react";

import Image31 from "../Images/rishanak_devadiga.jpg";
import Image32 from "../Images/vishal_mane.png";
import Image33 from "../Images/murali_krishna.jpg";
import Image34 from "../Images/sachin_baby.png";
import Image35 from "../Images/sangram_chougule.png";
import Image36 from "../Images/unmukt_chand.png";
import Image37 from "../Images/sambhaji_kadam.png";

const url = [
  {
    img: Image31,
    text: "Mr.Rishana K Devadiga",
    achive: "Captain of Maharashtra kabaddi team and Up Yoddha",
    year: "(Guest of honour Zenith'19)",
  },
  {
    img: Image32,
    text: "Mr.Vishal Mane",
    achive:
      "First player to complete 100 matches in PKL, top defender of Dabangg Delhi k.c.",
    year: "(Guest of honour Zenith'19)",
  },
  {
    img: Image33,
    text: "Mr.Murali Krishna",
    achive: "Indian Basketball Captain.",
    year: "(Guest of honour Zenith'20)",
  },
  {
    img: Image34,
    text: "Mr.Sachin Baby",
    achive: "2016-17 &2021 RCB Left hand batsman",
    year: "(Guest of honour Zenith'22)",
  },
  {
    img: Image35,
    text: "Mr.Sangram Choughle",
    achive: "Mr.Universe, Mr.Asia, Mr.India",
    year: "(Guest of honour Zenith'17)",
  },
  {
    img: Image36,
    text: "Mr.Unmukt Chand",
    achive: "Indian Cricketer Captain of U-19 Worldcup in 2012",
    year: "(Guest of honour Zenith'18)",
  },
  {
    img: Image37,
    text: "Mr.Sambhaji Kadam",
    achive:
      "Former captain of Indian national Basketball team and Head Coach of Army team",
    year: "(Guest of honour Zenith'21)",
  },
];

const Guest = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // lazyLoad: true,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 1100,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
      <div className="tag">
        <h1>Our Previous year Guest</h1>
      </div>
      <div className="imgslider">
        <Slider {...settings}>
          {url.map((url, idx) => (
            <div
              key={url.id}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img src={url.img} alt={url.img} />
              <h2>{url.text}</h2>
              <p>{url.achive}</p>
              <span>{url.year}</span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Guest;
