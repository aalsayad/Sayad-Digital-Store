import "./homevideo.styles.scss";
import { ReactComponent as Logo } from "./sayad-store-logo.svg";
import smoothScroll from "../../Utilities/smoothScroll";
//!Smooth Scrolling
import { Link, scroller } from "react-scroll";
import scrollAnimation from "../../Utilities/smoothScroll";

// const scrollAnimation = () => {
//   scroller.scrollTo("start-shopping", {
//     duration: 1000,
//     smooth: "easeOutQuart",
//     offset: -100,
//   });
// };

const HomeVideo = () => {
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
          <Link
            className="h2"
            onClick={scrollAnimation(1000, "easeOutQuart", -100, "start-shopping")}
          >
            <div className="video-text-cta">
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
