import "./Navbar.css";
// import data from "../assets/data";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/pictures/logo-white-horizontal.png";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleBlur = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  return (
    <div className="navbar" onBlur={handleBlur} tabIndex={0}>
      <div className="navbar-logo-container">
        <img src={Logo} alt="logo-tatova-pila" className="navbar-logo" />

        <button
          className="navbar-mobile-icon-container"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <RxHamburgerMenu className="navbar-mobile-icon" />
        </button>
      </div>

      <nav
        className={`navbar-navlinks-container ${
          isVisible && "navbar-navlinks-container-visible"
        }`}
      >
        <NavLink
          to="/"
          onClick={handleBlur}
          className={({ isActive, isPending }) =>
            [
              isPending ? "pending" : "",
              isActive ? "navbar-navlink-active" : "",
              "navbar-navlink",
            ].join(" ")
          }
        >
          O nás
        </NavLink>
        <NavLink
          to="/co-delame"
          onClick={handleBlur}
          className={({ isActive, isPending }) =>
            [
              isPending ? "pending" : "",
              isActive ? "navbar-navlink-active" : "",
              "navbar-navlink",
            ].join(" ")
          }
        >
          Co děláme
        </NavLink>
        <NavLink
          to="/kde-pracujeme"
          onClick={handleBlur}
          className={({ isActive, isPending }) =>
            [
              isPending ? "pending" : "",
              isActive ? "navbar-navlink-active" : "",
              "navbar-navlink",
            ].join(" ")
          }
        >
          Kde pracujeme
        </NavLink>
        <NavLink
          to="/za-kolik"
          onClick={handleBlur}
          className={({ isActive, isPending }) =>
            [
              isPending ? "pending" : "",
              isActive ? "navbar-navlink-active" : "",
              "navbar-navlink",
            ].join(" ")
          }
        >
          Za kolik
        </NavLink>
        <NavLink
          to="/galerie"
          onClick={handleBlur}
          className={({ isActive, isPending }) =>
            [
              isPending ? "pending" : "",
              isActive ? "navbar-navlink-active" : "",
              "navbar-navlink",
            ].join(" ")
          }
        >
          Galerie
        </NavLink>
        <NavLink
          to="/kontakt"
          onClick={handleBlur}
          className={({ isActive, isPending }) =>
            [
              isPending ? "pending" : "",
              isActive ? "navbar-navlink-active" : "",
              "navbar-navlink",
            ].join(" ")
          }
        >
          Kontakt
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
