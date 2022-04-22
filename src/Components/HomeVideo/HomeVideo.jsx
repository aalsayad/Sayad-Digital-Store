import React from "react";
import { useState, useEffect } from "react";
import "./homevideo.styles.scss";
import { ReactComponent as Logo } from "./sayad-store-logo.svg";
import { motion } from "framer-motion";

//!Smooth Scrolling
import { Link, scroller } from "react-scroll";

const scrollAnimation = () => {
  scroller.scrollTo("start-shopping", {
    duration: 1000,
    smooth: "easeOutQuart",
    offset: -100,
  });
};

const HomeVideo = () => {
  //!Parallex Effect
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //this is to remove the event listener after the component unloads
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="video-container">
        <video
          style={{ transform: `translateY(${offsetY * 0.6}px)` }}
          className="video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./assets/videos/sayad-store.mp4" type="video/mp4" />
        </video>
        <motion.div
          animate={{
            y: "100%",
            transition: { duration: 2, delay: 0.14, ease: [0.6, 0.2, 0.05, 0.9] },
          }}
          className="video-covering"
        >
          hi
        </motion.div>
        <div className="video-text-container">
          {/* //!This is where the main text of the gome screen lives */}
          <motion.div
            className="video-main-text"
            style={{ transform: `translateY(${offsetY * -0.2}px)` }}
          >
            <span>
              Be exclusive, <br />
            </span>
            <span className="strong--bold">
              Be Bold,
              <br />
            </span>
            <span> Be yourself.</span>
          </motion.div>

          {/* //!This is where the CTA dropdown arrow lives */}
          <Link to="" onClick={scrollAnimation}>
            <motion.div
              className="video-text-cta"
              style={{ transform: `translateY(${offsetY * -0.6}px)` }}
            >
              <Logo className="arrow__down" />
              <h2>
                <span className="strong--start"> Start</span> Shopping
              </h2>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeVideo;
