import SignupForm from "../Signup/SignupForm";
import GoogleSignInForm from "../GoogleSignin/GoogleSignIn";
import "./_Routes.styles/signinpage.styles.scss";

const SignIn = () => {
  return (
    <>
      <div className="navbar-placeholder"></div>;
      <div className="fullscreen-page--dark flex-center">
        <SignupForm />
      </div>
    </>
  );
};

export default SignIn;
