import "./homevideo.styles.scss";

const HomeVideo = () => {
  return (
    <div className="video-container">
      <video className="video" autoPlay loop muted>
        <source src="./assets/videos/home-video.webm" type="video/webm" />
      </video>
      <div className="video-text">
        <h2>
          Be exclusive, <br />
          <span className="strong">Be Bold,</span>
          <br /> Be yourself.
        </h2>
      </div>
    </div>
  );
};

export default HomeVideo;
