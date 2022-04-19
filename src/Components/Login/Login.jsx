import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utilities/Firebase/Firebase.ulitities";
import { FaGoogle } from "react-icons/fa";
import "./login.styles.scss";

const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <main>
      <div>
        <div className="form-container form--login">
          <div className="form-title">
            <h2>Log in</h2>
          </div>

          <form className="form-fields-container-login">
            <div>
              <label>Email</label>
              <input type="email" required name="email" />
              <label>Password</label>

              <input type="password" required name="password" />
              <div className="btn btn--signup">Log In to your account</div>
            </div>
            <p> OR </p>
            <div className="btn btn--signup google" onClick={logGoogleUser}>
              <FaGoogle
                style={{ fill: "white", marginRight: "1rem", position: "relative", top: "2px" }}
              />
              Log in with google
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignInForm;
