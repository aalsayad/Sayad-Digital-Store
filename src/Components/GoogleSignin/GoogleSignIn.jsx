import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utilities/Firebase/Firebase.ulitities";

import { FaGoogle } from "react-icons/fa";

const GoogleSignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <>
      <button className="btn btn--signup google" onClick={logGoogleUser}>
        <FaGoogle style={{ fill: "white", marginRight: "2rem" }} />
        Sign in with google
      </button>
    </>
  );
};

export default GoogleSignInForm;
