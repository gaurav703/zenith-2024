import React, { useState, useEffect } from "react";
import "./Event.css";
import Model from "./Model";
import pdf from "./Zenith.pdf";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer2/footer2.jsx";

const sportsData = [
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415831/Event-Page/dhz3zwc6ebpiytudgmpr.png",
    name: "Cricket",
    boys: "Boys : 6000₹",
    // girls: "Girls : 1200₹",
    contact1: "Om Dhande: - 74990 65743 ",
    contact2: "Kuntal Lawate: 70583 75155",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415833/Event-Page/xcul6wzqejyuxxh4bjgu.png",
    name: "Football",
    boys: "Boys : 3000₹",
    // girls: "Girls : 1200₹",
    // contact: "Sainath Shettiwar: 9604875754 , Devanshu kothe : 9130707352",
    contact1: "Sainath Shettiwar: 9604875754",
    contact2: "Devanshu kothe : 9130707352",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415833/Event-Page/xcul6wzqejyuxxh4bjgu.png",
    name: "RingFootball",
    boys: "Boys : 2000₹",
    // girls: "Girls : 1200₹",
    // contact: "Abhishek avhad: 8329896467 , Fazlur Rahman : 8767221998",
    contact1: "Abhishek avhad: 8329896467",
    contact2: "Fazlur Rahman : 8767221998",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415829/Event-Page/jcqmiwan90zxdjqepfax.png",
    name: "Chess",
    boys: "Team : 1500₹",
    girls: "Solo : 400₹",
    // contact: "Vaishnavi paul : 90114 69945 , Aditya chincholkar : 7385041646",
    contact1: "Vaishnavi paul : 90114 69945",
    contact2: "Aditya chincholkar : 7385041646",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415835/Event-Page/fhvd0hjerpv8pmlbkhse.png",
    name: "Volleyball",
    boys: "Boys : 2200₹",
    girls: "Girls : 1800₹",
    //contact: "Ayush Gahukar: 7666693350 , Pranay Rathod: 8767410458",
    contact1: "Ayush Gahukar: 7666693350",
    contact2: "Pranay Rathod: 8767410458",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415829/Event-Page/wapi2dnoivdrd4e3cofq.png",
    name: "Kabaddi",
    boys: "Boys : 1700₹",
    girls: "Girls : 1500₹",
    //  contact: "Sushant Pradhan: 8836025310 , Nikul Jadhao : 8836025310",
    contact1: "Sushant Pradhan: 8836025310",
    contact2: "Nikul Jadhao : 8836025310",
  },
  {
    image:
      "https://res.cloudinary.com/ddaxlm9yc/image/upload/v1707434615/ftfsvqgu2y026vsbt1ui.png",
    name: "Kho-Kho",
    boys: "Boys : 1200₹",
    // girls: "Girls : 1200₹",
    //  contact: "Sushant Pradhan: 8836025310 , Nikul Jadhao : 8836025310",
    contact1: "Gaurav Nayase: 7249849725",
    // contact2: "Nikul Jadhao : 8836025310",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415834/Event-Page/dsxvtc0pgyta5mpyprkt.png",
    name: "Handball",
    boys: "Boys : 1500₹",
    girls: "Girls : 1200₹",
    //contact: "Aniket Dharwar: 96733 52236 , Udedhan Sonawane : 8888964392",
    contact1: "Aniket Dharwar: 96733 52236",
    contact2: "Udedhan Sonawane : 8888964392",
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415833/Event-Page/apa36dxqwxmevwkgl5hl.png",
    name: "Basketball",
    boys: "Boys : 2500₹",
    girls: "Girls : 2000₹",
    // contact: "Dishant Sawwalakhe: 9699120082 , Shakib : 9960844980",
    contact1: "Dishant Sawwalakhe: 9699120082",
    contact2: "Shakib : 9960844980",
  },
];

const Event = () => {
  const [Pop, setPop] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);

  const handleViewMore = (sport) => {
    setSelectedSport(sport);
    setPop(true);
  };

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
    <>
      <Navbar />
      <div className="main-container">
        <div className={Pop ? "blur-background" : ""}></div>
        <div className="heading">
          <h1>Events</h1>
        </div>
        <div className="wrapper">
          {sportsData.map((sport, index) => (
            <div className="card1" key={index}>
              <div className="img">
                <img src={sport.image} alt="" />
              </div>
              <h2>{sport.name}</h2>
              <div className="info">
                <h2>{sport.name}</h2>
                <p className="fees">Entry Fee </p>
                <div className="price">
                  <p>
                    {sport.boys}
                    <br />
                    {sport.girls}
                  </p>
                </div>
                <div className="btns">
                  <button className="btn" onClick={() => handleViewMore(sport)}>
                    View More
                  </button>
                  <button
                    id="downloadBtn"
                    value="download"
                    className="download"
                    onClick={() => download(pdf)}
                  >
                    <img
                      src="https://res.cloudinary.com/dqki29mbg/image/upload/v1707415831/Event-Page/bsomh2xhrbiuz6jpe9ah.png"
                      alt="Download"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="pop">
            {Pop && (
              <Model sport={selectedSport} onClose={() => setPop(false)} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
