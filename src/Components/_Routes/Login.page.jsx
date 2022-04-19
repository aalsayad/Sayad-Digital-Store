import { useState } from "react";
import SignupForm from "../Signup/SignupForm";
import SignInForm from "../Login/Login";
import "./_Routes.styles/Loginpage.styles.scss";

const SignIn = () => {
  const [formIsLogin, setFormIsLogin] = useState(true);
  const toggleForms = () => {
    setFormIsLogin((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="navbar-placeholder"></div>

      <div className="fullscreen-page--dark flex-center">
        <div className="bg-img" />
        <div className="ztop flex-center">
          {formIsLogin ? <SignInForm /> : <SignupForm />}

          <h4 className="under-form-cta">
            {formIsLogin ? "DONT HAVE AN ACCOUNT?" : "ALREADY REGISTERED?"}
            <span onClick={toggleForms} className="register-now-cta">
              {formIsLogin ? "REGISTER HERE" : "LOGIN TO YOUR ACCOUNT"}
            </span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default SignIn;
