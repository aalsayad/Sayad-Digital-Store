import React, { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utilities/Firebase/Firebase.ulitities";
import { FaGoogle } from "react-icons/fa";
import "./loginform.styles.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  //!toggle password hidden view
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const handleHidePassword = () => {
    setHiddenPassword((prevValue) => !prevValue);
  };

  return (
    <div className="form-container form--login">
      <div className="form-title">
        <h2>Log in</h2>
      </div>

      <form className="form-fields-container-login">
        <div>
          <label>Email</label>
          <input className="input" type="email" required name="email" />

          <div className="password-show-input">
            <label>Password </label>
            <input
              className="input password__input"
              type={hiddenPassword ? "password" : "text"}
              required
              name="password"
            />
            <div onClick={handleHidePassword} className="show-password-icon-holder">
              {hiddenPassword ? (
                <AiFillEyeInvisible className="show-password__icon" />
              ) : (
                <AiFillEye className="show-password__icon" />
              )}
            </div>
          </div>

          <div className="btn btn--signup login">Log In to your account</div>
          <div className="btn btn--signup google" onClick={logGoogleUser}>
            <FaGoogle
              style={{ fill: "white", marginRight: "1rem", position: "relative", top: "2px" }}
            />
            Log in with google
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
