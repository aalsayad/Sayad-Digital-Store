import { Link, scroller } from "react-scroll";

const scrollAnimation = (duration, smooth, offset, id) => {
  scroller.scrollTo(id, {
    duration: duration,
    smooth: smooth,
    offset: offset,
  });
};

export default scrollAnimation;
