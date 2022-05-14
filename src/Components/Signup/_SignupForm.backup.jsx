import { useState } from "react";
import "./signup.styles.scss";
import SignupFormInput from "./_SignupFormInput.backup";
import { Formik, Form } from "formik";

const SignupForm = () => {
  //!Setting up the object that is storing all the form fields values
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //!What happens when the user clicks on submit button
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //!Handling the typing of the user to start changing my formfield values object
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //!Passing in the array of inputs to be mapped over and populate the sign up form
  const SignupFormInputData = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "Username",
      errorMessage: [
        "Should be between 3 - 16 characters",
        "Can't contain special characters or spaces",
      ],
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      errorMessage: ["Please enter a valid email address"],
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      label: "Password",
      errorMessage: [
        "Should be more than 8 characters",
        "Atleast 1 Uppercase, 1 Lowercase & 1 Special Character",
      ],
      required: true,
      pattern: `^(?=.*a-z)(?=.*A-Z)(?=.*0-9)(?=.*!@#$%^&*){8,}$`,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      label: "Confirm Password",
      errorMessage: ["Please make sure the entered passwords match"],
      pattern: values.password,
      required: true,
    },
  ];

  console.log(values);
  return (
    <div className="form-container form--signup">
      <div className="form-title">
        <h2>Register</h2>
      </div>
      <form className="form-fields-container-signup" onSubmit={handleSubmit}>
        {SignupFormInputData.map((input) => (
          <SignupFormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}

        <div className="btn btn--signup btn--disabled">Sign up</div>
      </form>
    </div>
  );
};

export default SignupForm;
