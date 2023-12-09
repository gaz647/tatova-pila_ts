import "./Navbar.css";
import data from "../assets/data";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/pictures/logo-white-horizontal.png";

interface NavbarProps {
  currentVisiblePageId: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentVisiblePageId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleBlur = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  return (
    <nav className="navbar" onBlur={handleBlur} tabIndex={0}>
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
