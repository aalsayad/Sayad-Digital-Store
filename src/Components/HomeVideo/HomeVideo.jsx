import React from "react";
import { useState, useEffect } from "react";
import "./homevideo.styles.scss";
import { ReactComponent as Logo } from "./sayad-store-logo.svg";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="video-text-container">
          <motion.div
            style={{ transform: `translateY(${offsetY * 5}px)` }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          >
            <h2>
              Be exclusive, <br />
              <span className="strong--bold">Be Bold,</span>
              <br /> Be yourself.
            </h2>
          </motion.div>

          <Link to="" className="h2" onClick={scrollAnimation}>
            <motion.div
              className="video-text-cta"
              style={{ transform: `translateY(${offsetY * -0.6}px)` }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -150 }}
              transition={{ duration: 1.3, delay: 1.2, ease: "easeOut" }}
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
