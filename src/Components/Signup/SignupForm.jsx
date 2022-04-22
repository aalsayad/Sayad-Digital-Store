import { useState } from "react";
import "./signup.styles.scss";

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
    <div className="form-container form--signup">
      <div className="form-title">
        <h2>Register</h2>
      </div>

      <form className="form-fields-container-signup">
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
        <div className="btn btn--signup">Sign up</div>
      </form>
    </div>
  );
};

export default SignupForm;
