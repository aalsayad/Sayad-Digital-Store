import "./homevideo.styles.scss";
import Video from "./home-video.webm";

const HomeVideo = () => {
  // const EmbedVideo = function (props) {
  //   return (
  //     <div
  //       dangerouslySetInnerHTML={{
  //         __html: `
  //       <video
  //         loop
  //         muted
  //         autoplay
  //         playsinline
  //         src="${props.src}"
  //         class="${props.className}"
  //       />,
  //     `,
  //       }}
  //     ></div>
  //   );
  // };
  return (
    <div className="video-container">
      {/* <div
        dangerouslySetInnerHTML={{
          __html: `<video className="video" autoplay loop muted playsinline>
      <source src=${Video} type="video/webm" />
      Your browser does not support the video tag.
</video> `,
        }}
      /> */}
      <video className="video" autoPlay loop muted playsInline>
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
