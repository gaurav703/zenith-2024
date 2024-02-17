import React from "react";
import Heropage from "../heropage/heropage";
import About from "../about/about";
import Icons from  "../Icons/icons.js";
import Navbar from "../navbar/navbar.jsx";
import Mentor from "../MentorsPage/mentor.js";
import Footer from "../footer2/footer2.jsx";

export default function Homepage() {
  return (
    <div>
      <Navbar activePage="home" />
      <Heropage />
      <About />
      <Icons />
      <Mentor />
      <Footer />
    </div>
  );
}