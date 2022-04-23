import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { motion } from "framer-motion";

const FooterSection = ({ title, data, children, displaytitle, animatable, defaultopen }) => {
  //!toggle section dropdown
  const [sectionExpanded, setSectionExpanded] = useState(!defaultopen);
  const handleSectionClick = () => {
    setSectionExpanded((prevValue) => !prevValue);
  };
  return (
    <>
      <motion.div
        className={`footer-section footer__${title}`}
        animate={sectionExpanded && animatable ? { height: "2.5rem" } : { height: "auto" }}
        transition={{ duration: 0.75, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {displaytitle && (
          <h5 onClick={handleSectionClick}>
            {title}
            <motion.div
              animate={sectionExpanded ? { rotate: -45 } : { rotate: 0 }}
              transition={{ duration: 0.15, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <AiFillCaretDown className="footer__icon" />
            </motion.div>
          </h5>
        )}

        {data && (
          <>
            <ul>
              {data.map(({ title, id }) => {
                return <li key={id}>{title}</li>;
              })}
            </ul>
          </>
        )}
        {children}
      </motion.div>
    </>
  );
};

export default FooterSection;
