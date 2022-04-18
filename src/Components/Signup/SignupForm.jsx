import { useState, useEffect } from "react";
import "./signup.styles.scss";
import GoogleSignInForm from "../GoogleSignin/GoogleSignIn";

const SignupForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const { displayName, email, password, confirmedPassword } = formFields;

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    console.log(formFields);

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <>
      <div className="form form--signup">
        <h2 className="form-title">Sign Up with Email & Password</h2>
        <form>
          <label>Display Name</label>
          <input
            type="string"
            required
            onChange={handleUserInput}
            name="displayName"
            value={displayName}
          />

          <label>Email</label>
          <input type="email" required onChange={handleUserInput} name="email" value={email} />

          <label>Password</label>
          <input
            type="password"
            required
            onChange={handleUserInput}
            name="password"
            value={password}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            required
            onChange={handleUserInput}
            name="confirmedPassword"
            value={confirmedPassword}
          />
        </form>
        <div className="form-ctas">
          <button className="btn btn--signup">Sign up</button>
          <p>OR </p>
          <GoogleSignInForm />
        </div>
      </div>
    </>
  );
};

export default SignupForm;
