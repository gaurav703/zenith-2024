import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "./guest.css";
import React, { useState } from "react";

const url = [
  {
    img: "https://res.cloudinary.com/dqki29mbg/image/upload/v1708458744/Zenith-24/bwm84dbzmcwms62g1j3b.jpg",
    text: "Mr.Rishana K Devadiga",
    achive: "Captain of Maharashtra kabaddi team and Up Yoddha",
    year: "(Guest of honour Zenith'19)",
  },
  {
    img: "https://res.cloudinary.com/dqki29mbg/image/upload/v1708458745/Zenith-24/ceuxn5zq5wxvjhali4vo.png",
    text: "Mr.Vishal Mane",
    achive:
      "First player to complete 100 matches in PKL, top defender of Dabangg Delhi k.c.",
    year: "(Guest of honour Zenith'19)",
  },
  {
    img: "https://res.cloudinary.com/dqki29mbg/image/upload/v1708458779/Zenith-24/ixsbnrw62yf7zxguibp5.jpg",
    text: "Mr.Murali Krishna",
    achive: "Indian Basketball Captain.",
    year: "(Guest of honour Zenith'20)",
  },
  {
    img: "https://res.cloudinary.com/dqki29mbg/image/upload/v1708459688/Zenith-24/pl2guez2miasibgq1vgl.png",
    text: "Mr.Sachin Baby",
    achive: "2016-17 &2021 RCB Left hand batsman",
    year: "(Guest of honour Zenith'22)",
  },
  {
    img: "https://res.cloudinary.com/dqki29mbg/image/upload/v1708458745/Zenith-24/vmpnvp1atxin1lz3icdj.png",
    text: "Mr.Sangram Choughle",
    achive: "Mr.Universe, Mr.Asia, Mr.India",
    year: "(Guest of honour Zenith'17)",
  },
  {
    img: "https://res.cloudinary.com/dqki29mbg/image/upload/v1708458745/Zenith-24/euntdtajxj1exz5te9mh.png",
    text: "Mr.Unmukt Chand",
    achive: "Indian Cricketer Captain of U-19 Worldcup in 2012",
    year: "(Guest of honour Zenith'18)",
  },
  {
    img: "https://res.cloudinary.com/dqki29mbg/image/upload/v1708459687/Zenith-24/yhsbo0ojfpglgjmxudjs.png",
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
        },
      },
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
      <div className="tag">
        <h1>OUR PREVIOUS YEAR GUEST</h1>
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
