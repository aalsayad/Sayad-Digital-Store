import "./homevideo.styles.scss";
import { ReactComponent as Logo } from "./sayad-store-logo.svg";
//!Smooth Scrolling
import { Link, scroller } from "react-scroll";

const HomeVideo = () => {
  const scrollAnimation = () => {
    scroller.scrollTo("start-shopping", {
      duration: 1000,
      smooth: "easeOutQuart",
      offset: -100,
    });
  };
  return (
    <>
      <div className="video-container">
        <video className="video" autoPlay loop muted playsInline>
          <source src="./assets/videos/sayad-store.mp4" type="video/mp4" />
        </video>
        <div className="video-text-container">
          <h2>
            Be exclusive, <br />
            <span className="strong--bold">Be Bold,</span>
            <br /> Be yourself.
          </h2>
          <Link className="h2" onClick={scrollAnimation}>
            <div className="video-text-cta">
              {/* <img className="arrow__down" src="./assets/icons/arrow-bottom.svg" /> */}
              <Logo className="arrow__down" />

              <h2>
                <span className="strong--start"> Start</span> Shopping
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeVideo;
