import { scroller } from "react-scroll";
import { useState } from "react";
import "./navbar.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./sayad-store-logo.svg";
import Footer from "../Footer/Footer";

const Navbar = () => {
  //!Navbar mobile usestate toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setMobileMenuOpen((prevValue) => !prevValue);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    scrollAnimation();
  };

  //!Smooth Scrolling
  const scrollAnimation = () => {
    scroller.scrollTo("top", {
      duration: 1200,
      smooth: "easeOutQuart",
    });
  };

  return (
    <>
      <div id="top"></div>
      <nav className="navbar">
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
            <Link className="navbar-link signin" to="./account">
              Log in
            </Link>
            <Link className="navbar-link cart" to="./cart">
              Cart (0)
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
