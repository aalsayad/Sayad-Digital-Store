import React from "react";
import "./signinform.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utilities/Firebase/Firebase.ulitities";

const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <>
      <div>
        <button onClick={logGoogleUser}>Sign in with google</button>
      </div>
    </>
  );
};

export default SignInForm;
