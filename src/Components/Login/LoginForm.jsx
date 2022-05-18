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

  //!Error Message
  const [errorResponseMessage, setErrorResponseMessage] = useState("");
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
            const response = await signInAuthUserWithEmailAndPassword(
              values.email,
              values.password
            );
            setErrorResponseMessage("");
            console.log(response);
          } catch (error) {
            switch (error.code) {
              case "auth/wrong-password":
                setErrorResponseMessage("Incorrect password for email.");
                break;
              case "auth/user-not-found":
                setErrorResponseMessage("No account has been created with this email.");
                break;
              case "auth/too-many-requests":
                setErrorResponseMessage("Too many failed login attempts. Try again later.");
                break;
              default:
                console.log(error);
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
                  <span className="absolute x__icon--response-message">✖</span>
                </div>
              )}
              <Form className="form-fields-container-signup">
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <button className="btn btn--signup login" type="submit">
                  Log In to your account
                </button>
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
