import { useState } from "react";
import SignupForm from "../Signup/SignupForm";
import SignInForm from "../Login/LoginForm";
import "./_Routes.styles/Loginpage.styles.scss";
import { motion } from "framer-motion";

//!FramerMotion Variants
const floatUp = {
  initial: { opacity: 0, y: 70 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.43, 0.13, 0.23, 0.96],
      delayChildren: 1,
    },
  },
};

const SignIn = () => {
  const [formIsLogin, setFormIsLogin] = useState(true);
  const toggleForms = () => {
    setFormIsLogin((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="navbar-placeholder"></div>
      <div className="background-img-container" />
      <motion.img
        initial={{ y: "-100%" }}
        animate={{
          y: 0,
          transition: { duration: 2.25, delay: 0.15, ease: [0.6, 0.2, 0.05, 0.9] },
        }}
        className="background__img"
        src="./assets/images/background.webp"
      />
      <div className="fullheight-container ztop">
        <motion.div variants={floatUp} initial="initial" animate="animate" className="ztop">
          <motion.div
            animate={formIsLogin ? { x: 0 } : { x: "-100vw" }}
            transition={{ duration: 1.15, ease: [0.6, 0.2, 0.05, 0.9] }}
            className="grid"
          >
            <SignInForm />
            <SignupForm />
          </motion.div>
          <h4 className="under-form-cta ztop">
            {formIsLogin ? "DONT HAVE AN ACCOUNT?" : "ALREADY REGISTERED?"}
            <span onClick={toggleForms} className="register-now-cta">
              {formIsLogin ? "REGISTER HERE" : "LOGIN TO YOUR ACCOUNT"}
            </span>
          </h4>
        </motion.div>
      </div>
    </>
  );
};

export default SignIn;
