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
    <nav className="navbar" onBlur={handleBlur} tabIndex={0}>
      <div className="navbar-logo-container">
        <img src={Logo} alt="logo-tatova-pila" className="navbar-logo" />

        <div
          className="navbar-mobile-icon-container"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <RxHamburgerMenu className="navbar-mobile-icon" />
        </div>
      </div>

      <div
        className={`navbar-navlinks-container ${
          isVisible && "navbar-navlinks-container-visible"
        }`}
      >
        <NavLink
          to="/o-nas"
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
      </div>
    </nav>
  );
};

export default Navbar;
