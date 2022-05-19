import "./loginform.styles.scss";
import TextField from "../Signup/TextField.component";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../Utilities/Firebase/Firebase.ulitities";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import Loader from "../../Utilities/Loader/Loader.component";

const LoginForm = () => {
  //!Setting up the validation using Yup
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Please enter an email"),
    password: Yup.string().required("Please enter a password"),
  });

  //!Login
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  //!Loading State
  const [isLoading, setIsLoading] = useState(false);

  //!Error Message
  const [errorResponseMessage, setErrorResponseMessage] = useState("");
  const closeError = () => {
    setErrorResponseMessage("");
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={async (values, { resetForm }) => {
          try {
            setIsLoading(true);
            const response = await signInAuthUserWithEmailAndPassword(
              values.email,
              values.password
            );
            resetForm();
            setErrorResponseMessage("");
          } catch (error) {
            switch (error.code) {
              case "auth/wrong-password":
                setErrorResponseMessage("Incorrect password for email.");
                setIsLoading(false);
                break;
              case "auth/user-not-found":
                setErrorResponseMessage("No account has been created with this email.");
                setIsLoading(false);
                break;
              case "auth/too-many-requests":
                setErrorResponseMessage("Too many failed login attempts. Try again later.");
                setIsLoading(false);
                break;
              default:
            }
          }
        }}
      >
        {(formik) => (
          <>
            <div className="form-container form--signup">
              <div className="form-title">
                <h2>Log in</h2>
              </div>
              {errorResponseMessage && (
                <div className="response-message relative">
                  <p>{errorResponseMessage}</p>
                  <span onClick={closeError} className="absolute x__icon--response-message">
                    ✖
                  </span>
                </div>
              )}
              <Form className="form-fields-container-signup">
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />

                {!isLoading && (
                  <button className="btn btn--signup login" type="submit">
                    Log In to your account
                  </button>
                )}

                {isLoading && (
                  <button className="btn btn--loader" type="button">
                    <Loader />
                  </button>
                )}

                <div className="btn btn--signup google" onClick={logGoogleUser}>
                  <FaGoogle
                    style={{ fill: "white", marginRight: "1rem", position: "relative", top: "2px" }}
                  />
                  Log in with google
                </div>
              </Form>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
