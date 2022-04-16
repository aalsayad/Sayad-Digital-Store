import "./navbar.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./sayad-store-logo.svg";

const Navbar = () => {
  console.log("NavBar Rendered");
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="nav-logo" to="./">
            <Logo className="logo" />
            <h1>Sayad store</h1>
            {/* <img className="logo" src="./assets/logo/sayad-store-logo.svg" /> */}
          </Link>

          <div className="navbar-link-wrapper">
            <Link className="navbar-link shop" to="./shop">
              Shop
            </Link>
            <Link className="navbar-link contact" to="./contact">
              Contact
            </Link>
            <Link className="navbar-link signin" to="./signin">
              Sign in
            </Link>
            <Link className="navbar-link cart" to="./cart">
              Cart (0)
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
