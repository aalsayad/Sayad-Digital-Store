import "./signup.styles.scss";
import TextField from "./TextField.component";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utilities/Firebase/Firebase.ulitities";
import { useState } from "react";
import Loader from "../../Utilities/Loader/Loader.component";
import { FaCheck } from "react-icons/fa";

const SignupForm = () => {
  //!Setting up the validation using Yup
  const validate = Yup.object({
    username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be 3 characters or more")
      .matches(/^[a-zA-Z0-9]{3,15}$/, "Username can't contain special characters")
      .required("Please enter a username"),
    email: Yup.string().email("Email is invalid").required("Please enter an email"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&()*]{8,99}$/,
        "Password must contain atleast 1 number & 1 special character"
      )
      .required("Please enter a password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords doesn't match")
      .required("Please confirm your password"),
  });

  //!Error Message
  const [errorResponseMessage, setErrorResponseMessage] = useState("");
  const closeError = () => {
    setErrorResponseMessage("");
  };

  //!Loading State
  const [isLoading, setIsLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={async (values, { resetForm }) => {
          try {
            setIsLoading(true);
            const { user } = await createAuthUserWithEmailAndPassword(
              values.email,
              values.password
            );
            //Second parameter to populate "DisplayName" in userDocument in Firebase
            //Check firebase.utilities.jsx line 36
            await createUserDocumentFromAuth(user, { displayName: values.username });
            // resetForm();
            setAccountCreated(true);
            setErrorResponseMessage("");
          } catch (error) {
            switch (error.code) {
              case "auth/email-already-in-use":
                setErrorResponseMessage("Email is already in use.");
                setIsLoading(false);
                break;
              default:
                setErrorResponseMessage("Encountered an error during user creation.");
                setIsLoading(false);
                console.log(error);
            }
          }
        }}
      >
        {(formik) => (
          <>
            <div className="form-container form--signup">
              <div className="form-title">
                <h2>Sign Up</h2>
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
                <TextField label="Username" name="username" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <TextField label="Confirm Password" name="confirmPassword" type="password" />
                {!isLoading && (
                  <button
                    className={`btn btn--signup ${!formik.isValid && "btn--disabled"}`}
                    type="submit"
                  >
                    Create New Account
                  </button>
                )}
                {isLoading && (
                  <button className="btn btn--loader" type="button">
                    {!accountCreated && <Loader />}
                    {accountCreated && (
                      <>
                        Account Created
                        <FaCheck fill="white" opacity="0.4" style={{ marginLeft: "1rem" }} />
                      </>
                    )}
                  </button>
                )}
              </Form>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
