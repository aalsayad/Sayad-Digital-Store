import "./homevideo.styles.scss";

const HomeVideo = () => {
  return (
    <>
      <div className="video-container">
        <video className="video" autoPlay loop muted playsInline>
          <source src="./assets/videos/sayad-store.mp4" type="video/mp4" />
        </video>
        <div className="video-text">
          <h2>
            Be exclusive, <br />
            <span className="strong">Be Bold,</span>
            <br /> Be yourself.
          </h2>
        </div>
      </div>
    </>
  );
};

export default HomeVideo;
