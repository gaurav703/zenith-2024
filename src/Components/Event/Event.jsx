import React, { useState, useEffect } from "react";
import "./Event.css";
import Model from "./Model";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer2/footer2.jsx";
// import pdf from "./Zenith.pdf";
// import cricket from "./cricket.pdf";
// import chess from "./chess.pdf";
// import Basketball from "./Basketball.pdf";
// import football from "./football.pdf";

const sportsData = [
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415831/Event-Page/dhz3zwc6ebpiytudgmpr.png",
    name: "Cricket",
    pdf: require("./cricket.pdf").default,
    boys: "Boys : 6000₹",
    // girls: "Girls : 1200₹",
    contact1: "Om Dhande: - 74990 65743 ",
    contact2: "Kuntal Lawate: 70583 75155",
    descri:"A bat-and-ball game played between two teams of eleven players each on a circular field with a rectangular 22-yard long pitch in the center. The game involves batting, bowling, and fielding."
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415833/Event-Page/xcul6wzqejyuxxh4bjgu.png",
    name: "Football",
    pdf: require("./football.pdf").default,
    boys: "Boys : 3000₹",
    // girls: "Girls : 1200₹",
    // contact: "Sainath Shettiwar: 9604875754 , Devanshu kothe : 9130707352",
    contact1: "Sainath Shettiwar: 9604875754",
    contact2: "Devanshu kothe : 9130707352",
    descri:"A team sport played between two teams of eleven players each, using a spherical ball. The objective is to score goals by getting the ball into the opposing team's goal."
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415833/Event-Page/xcul6wzqejyuxxh4bjgu.png",
    name: "RingFootball",
    pdf: require("./ringfootball.pdf").default,
    boys: "Boys : 2000₹",
    // girls: "Girls : 1200₹",
    // contact: "Abhishek avhad: 8329896467 , Fazlur Rahman : 8767221998",
    contact1: "Abhishek avhad: 8329896467",
    contact2: "Fazlur Rahman : 8767221998",
    descri:"A variation of association football played on a smaller, indoor playing surface enclosed by walls. It is characterized by its fast pace and emphasis on skillful play in tight spaces."
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415829/Event-Page/jcqmiwan90zxdjqepfax.png",
    name: "Chess",
    pdf: require("./chess.pdf").default,
    boys: "Team : 1500₹",
    girls: "Solo : 400₹",
    // contact: "Vaishnavi paul : 90114 69945 , Aditya chincholkar : 7385041646",
    contact1: "Vaishnavi paul : 90114 69945",
    contact2: "Aditya chincholkar : 7385041646",
    descri:"A two-player strategy board game played on a checkered board with 64 squares arranged in an 8x8 grid. Each player starts with sixteen pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns."
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415835/Event-Page/fhvd0hjerpv8pmlbkhse.png",
    name: "Volleyball",
    pdf: require("./volleyball.pdf").default,
    boys: "Boys : 2200₹",
    girls: "Girls : 1800₹",
    //contact: "Ayush Gahukar: 7666693350 , Pranay Rathod: 8767410458",
    contact1: "Ayush Gahukar: 7666693350",
    contact2: "Pranay Rathod: 8767410458",
    descri:"A team sport in which two teams of six players each are separated by a net. The objective is to send the ball over the net and ground it on the opponent's side of the court, while preventing the same effort by the opponent."
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415829/Event-Page/wapi2dnoivdrd4e3cofq.png",
    name: "Kabaddi",
    pdf: require("./kabbadi.pdf").default,
    boys: "Boys : 1700₹",
    girls: "Girls : 1500₹",
    //  contact: "Sushant Pradhan: 8836025310 , Nikul Jadhao : 8836025310",
    contact1: "Sushant Pradhan: 8836025310",
    contact2: "Nikul Jadhao : 8836025310",
    descri:"A contact team sport originating from ancient India, where two teams take turns sending a &apos;raider&apos; into the opposing team's territory, aiming to tag as many defenders as possible without being tackled."
  },
  {
    image:
      "https://res.cloudinary.com/ddaxlm9yc/image/upload/v1707434615/ftfsvqgu2y026vsbt1ui.png",
    name: "Kho-Kho",
    pdf: require("./kho-kho.pdf").default,
    boys: "Boys : 1200₹",
    // girls: "Girls : 1200₹",
    //  contact: "Sushant Pradhan: 8836025310 , Nikul Jadhao : 8836025310",
    contact1: "Gaurav Nayase: 7249849725",
    // contact2: "Nikul Jadhao : 8836025310",
    descri:"A traditional Indian sport played by two teams, each consisting of twelve players, who take turns chasing and defending. The chasing team attempts to tag the opposing team members, while the defenders try to avoid being tagged."
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415834/Event-Page/dsxvtc0pgyta5mpyprkt.png",
    name: "Handball",
    pdf: require("./handball.pdf").default,
    boys: "Boys : 1500₹",
    girls: "Girls : 1200₹",
    //contact: "Aniket Dharwar: 96733 52236 , Udedhan Sonawane : 8888964392",
    contact1: "Aniket Dharwar: 96733 52236",
    contact2: "Udedhan Sonawane : 8888964392",
    descri:"A team sport played on a court, in which players use their hands to throw a ball into the opposing team's goal. It combines elements of soccer and basketball, with fast-paced action and frequent scoring opportunities."
  },
  {
    image:
      "https://res.cloudinary.com/dqki29mbg/image/upload/v1707415833/Event-Page/apa36dxqwxmevwkgl5hl.png",
    name: "Basketball",
    pdf: require("./Basketball.pdf").default,
    boys: "Boys : 2500₹",
    girls: "Girls : 2000₹",
    // contact: "Dishant Sawwalakhe: 9699120082 , Shakib : 9960844980",
    contact1: "Dishant Sawwalakhe: 9699120082",
    contact2: "Shakib : 9960844980",
    descri:"A team sport in which two teams, typically of five players each, compete to score points by throwing a ball through the opponent's hoop, which is mounted 10 feet above the ground."
  },
];

const Event = () => {
  const [Pop, setPop] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);

// Function to open the modal and freeze the screen
  const openModal = () => {
    setPop(true);
    document.body.classList.add("modal-open");
  };

  // Function to close the modal and unfreeze the screen
  const closeModal = () => {
    setPop(false);
    document.body.classList.remove("modal-open");
  };

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
      <Navbar activePage="events" />
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
                    onClick={() => download(sport.pdf)}
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
