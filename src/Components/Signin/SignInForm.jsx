import React from "react";
import "./signinform.styles.scss";
import { signInWithGooglePopup } from "../../Utilities/Firebase/Firebase.ulitities";

const SignInForm = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
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
