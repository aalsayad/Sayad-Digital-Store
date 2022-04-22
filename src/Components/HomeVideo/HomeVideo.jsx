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

//!Variants for Framer Motion
const videoText = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: -40,
    transition: {
      duration: 2,
      ease: [0.43, 0.13, 0.23, 0.96],
      staggerChildren: 0.2,
    },
  },
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
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
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
            transition: { duration: 2.5, delay: 0.15, ease: [0.6, 0.2, 0.05, 0.9] },
          }}
          className="video-covering"
        >
          hi
        </motion.div>
        <div className="video-text-container">
          {/* //!This is where the main text of the gome screen lives */}
          <motion.div
            className="video-main-text"
            variants={videoText}
            initial="initial"
            animate="animate"
          >
            <motion.span variants={videoText}>
              Be exclusive <br />
            </motion.span>
            <motion.span variants={videoText} className="strong--bold">
              Be Bold
              <br />
            </motion.span>
            <motion.span variants={videoText}> Be yourself</motion.span>
          </motion.div>

          {/* //!This is where the CTA dropdown arrow lives */}
          <Link to="" onClick={scrollAnimation}>
            <motion.div
              className="video-text-cta"
              initial={{ y: -30, opacity: 0, scale: 0.95 }}
              animate={{ y: -10, opacity: 0.5, scale: 0.92 }}
              transition={{ duration: 2, delay: 1.25, ease: [0.43, 0.13, 0.23, 0.96] }}
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
