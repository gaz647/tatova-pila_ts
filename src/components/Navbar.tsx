import "./Navbar.css";
import pages from "../assets/data";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavbarProps {
  visibleContainerId: number;
}

const Navbar: React.FC<NavbarProps> = ({ visibleContainerId }) => {
  const isMobile = window.innerWidth <= 580;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {!isMobile ? (
        <nav className="navbar">
          <ul>
            {pages.map((onePage) => {
              return (
                <li key={onePage.id}>
                  <a
                    className={`${
                      visibleContainerId.toString() === onePage.id &&
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
      ) : (
        <nav className="navbar-mobile">
          <div
            className="navbar-mobile-icon-container"
            onClick={() => setIsVisible(!isVisible)}
          >
            <RxHamburgerMenu className="navbar-mobile-icon" />
          </div>
          {isVisible && (
            <ul>
              {pages.map((onePage) => {
                return (
                  <li key={onePage.id}>
                    <a
                      className={`${
                        visibleContainerId.toString() === onePage.id &&
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
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
