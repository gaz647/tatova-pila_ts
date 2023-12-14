import "./Navbar.css";
import data from "../assets/data";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/pictures/logo-white-horizontal.png";

interface NavbarProps {
  currentVisiblePageId: string;
  isScrolling: boolean;
  isToHideNavbar: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  currentVisiblePageId,
  isScrolling,
  isToHideNavbar,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleBlur = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  useEffect(() => {
    if (isScrolling) {
      console.log("isScrolling useEffect v Navbar");

      // handleBlur();
    }
  }, [isScrolling]);

  useEffect(() => {
    if (isToHideNavbar) {
      handleBlur();
    }
  }, [isToHideNavbar]);

  return (
    <nav
      className="navbar"
      onBlur={() => {
        handleBlur;
        console.log("onBlur");
      }}
      tabIndex={0}
    >
      <div className="navbar-logo-container">
        <img src={Logo} alt="logo" className="navbar-logo" />
        <div
          className="navbar-mobile-icon-container"
          onClick={() => setIsVisible(!isVisible)}
        >
          <RxHamburgerMenu className="navbar-mobile-icon" />
        </div>
      </div>

      <ul className={`navbar-ul ${isVisible && "navbar-ul-visible"}`}>
        {data.map((onePage) => {
          return (
            <li className="navbar-ul-li" key={onePage.id}>
              <a
                className={`navbar-ul-li-a ${
                  currentVisiblePageId.toString() === onePage.id &&
                  "navbar-active"
                }`}
                href={`#${onePage.id}`}
              >
                {onePage.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
