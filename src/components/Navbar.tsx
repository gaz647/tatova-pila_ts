import "./Navbar.css";
// import data from "../assets/data";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/pictures/logo-white-horizontal_2.png";

interface NavbarProps {
  currentVisiblePageId: string;
  screenWidth: number;
}

const Navbar: React.FC<NavbarProps> = ({
  currentVisiblePageId,
  screenWidth,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const data = [
    {
      id: "0",
      title: "O nás",
      text: "Lorem ipsum dolores clan",
    },
    {
      id: "1",
      title: "Co děláme",
      text: "Lorem ipsum dolores clan",
    },
    {
      id: "2",
      title: "Kde pracujeme",
      text: "Lorem ipsum dolores clan",
    },
    {
      id: "3",
      title: "Co neděláme",
      text: "Honza 721223677, Michal 608416830",
    },
    {
      id: "4",
      title: "Kontakt",
      text: "Lorem ipsum dolores clan",
    },
    {
      id: "5",
      title: "Koho jsme potkali",
      text: "Lorem ipsum dolores clan",
    },
  ];

  return (
    <nav className="navbar" onBlur={() => setIsVisible(false)} tabIndex={0}>
      <div className="navbar-logo-container">
        <img src={Logo} alt="logo-tatova-pila" className="navbar-logo" />
        <div style={{ backgroundColor: "white", height: "2rem" }}>
          {screenWidth}
        </div>

        <div
          className="navbar-mobile-icon-container"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
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
