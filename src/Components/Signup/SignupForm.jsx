import "./signup.styles.scss";
import TextField from "./TextField.component";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const validate = Yup.object({
    username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be 3 characters or more")
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
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <>
            <div className="form-container form--signup">
              <div className="form-title">
                <h2>Register</h2>
              </div>
              <Form className="form-fields-container-signup">
                <TextField label="Username" name="username" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <TextField label="Confirm Password" name="confirmPassword" type="password" />
                <button
                  className={`btn btn--signup ${!formik.isValid && "btn--disabled"}`}
                  type="submit"
                >
                  Sign up
                </button>
              </Form>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
