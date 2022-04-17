import { useState } from "react";
import "./navbar.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./sayad-store-logo.svg";

const Navbar = () => {
  //!Navbar mobile usestate toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setMobileMenuOpen((prevValue) => !prevValue);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav id="top" className="navbar">
        <div className="navbar-container">
          <Link className="nav-logo" to="./" onClick={closeMobileMenu}>
            <Logo className="logo" />
            <h1>Sayad store</h1>
          </Link>

          <div
            className={
              mobileMenuOpen ? "burger-menu-wrapper--burger x" : "burger-menu-wrapper--burger"
            }
            onClick={toggleBurgerMenu}
          >
            <div className="burger__main-line"></div>
          </div>
          <div
            className={mobileMenuOpen ? "navbar-link-wrapper mobile" : "navbar-link-wrapper"}
            onClick={closeMobileMenu}
          >
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
