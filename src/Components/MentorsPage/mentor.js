import React, { useEffect, useRef, useState } from "react";
import "./mentor.css";
import director from "../Images/director.jpeg";
import dean from "../Images/dean.png";
import kadam from "../Images/kadam.jpg";
import reddy from "../Images/reddy.png";

const Mentor = () => {
  const sectionsRef = useRef([]);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [full, setFull] = useState(false);
  const [setDistance, setSetDistance] = useState(0);
  const targetY = window.innerHeight * 0.8;

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      setUp(scrollY < prevScrollY);
      setDown(!up);

      const timelineRect = timelineRef.current.getBoundingClientRect();
      // const lineRect = lineRef.current.getBoundingClientRect();
      const dist = targetY - timelineRect.top;

      if (down && !full) {
        setSetDistance((prev) => Math.max(prev, dist));
        lineRef.current.style.bottom = `calc(100% - ${setDistance}px)`;
      }

      if (dist > timelineRef.current.offsetHeight + 50 && !full) {
        setFull(true);
        lineRef.current.style.bottom = `-50px`;
      }

      sectionsRef.current.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      });

      setPrevScrollY(scrollY);
    };

    scrollHandler();
    lineRef.current.style.display = "block";
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [prevScrollY, down, full, setDistance, targetY, up]);

  return (
    <div className="container">
      <div className="top-section">
        <h1>MENTORS</h1>
      </div>
      <div className="timeline" ref={timelineRef}>
        <div className="line" ref={lineRef}>
          <div className="circle"></div>
        </div>

        <div className="section" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="bead">
            <img
              src="https://res.cloudinary.com/ddaxlm9yc/image/upload/v1707427563/ltt5ip3eihim9adgqb8s.png"
              className="image"
            ></img>
          </div>
          <div className="content">
            <h2>DR. MANESH.B.KOKARE</h2>
            <h2 className="title2">Director, SGGSIE&T</h2>
            <p>
              ZENITH is an exhilarating State Level Sports event of SGGSIE&T,
              it&apos;s a platform for every student to showcase their talents
              and athletic skills. The beauty of it lies in its ability to bring
              together the entire sports enthusiasts and student community,
              since it is completely organised by students. In an era where
              sedentary lifestyles and academic pressures can affect our health,
              it is utmost crucial to emphasize the significance of physical
              activity and its positive impact on both mental and physical well
              being.
            </p>
          </div>
        </div>
        <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
          <div className="bead">
            <img
              src="https://res.cloudinary.com/ddaxlm9yc/image/upload/v1707427040/xb0fzgymcy3erxuaspzv.png"
              className="image"
            ></img>
          </div>
          <div className="content">
            <h2>Mr. S. B. Dethe</h2>
            <h2 className="title2">Dean (Students Affairs), SGGSIE&T</h2>
            <p>
              Zenith is a state level sports event organized by the students of
              SGGSIE&T consisting of various sports like basketball, football,
              volleyball, etc. various teams from all over the state of
              Maharashtra compete to Devour the victory. In an all one of the
              best events in the state, with all the fun and enjoyment for
              complete 3 days.
            </p>
          </div>
        </div>

        <div className="section" ref={(el) => (sectionsRef.current[2] = el)}>
          <div className="bead">
            <img
              src="https://res.cloudinary.com/dqki29mbg/image/upload/v1707291527/Zenith-24/cb2ei7yn0klvfhjtqz9j.jpg"
              className="image"
            ></img>
          </div>
          <div className="content">
            <h2>Prof. Bhaskar Kadam</h2>
            <h2 className="title2">Sports Incharge, SGGSIE&T</h2>
            <p>
              As a sports incharge, it's my duty to encourage athletes to
              praticipate in such events. This event is bound to enhance your
              gameplay and team synergy. So teams, get warmed-up and be ready to
              give it all you got!!
            </p>
          </div>
        </div>

        <div className="section" ref={(el) => (sectionsRef.current[3] = el)}>
          <div className="bead">
            <img
              src="https://res.cloudinary.com/dqki29mbg/image/upload/v1707291528/Zenith-24/uus5r2qf4joz5tyn3dmd.png"
              className="image"
            ></img>
          </div>
          <div className="content">
            <h2>Late Prof. R. B. Reddy</h2>
            <h2 className="title2">Former Sports Incharge, SGGSIE&T</h2>
            <p>
              The previous Sports Incharge of the institute who has helped all
              the student athletes in their preparation and has set the bar sky
              high. Under his guidance the sports level of the institute had
              elevated and SGGS became a force to be reckoned with. We hope to
              grow under the shadow of your blessings reddy sir😇
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
