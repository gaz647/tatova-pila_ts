import "./Navbar.css";
import pages from "../assets/data";

interface NavbarProps {
  visibleContainerId: number;
}

const Navbar: React.FC<NavbarProps> = ({ visibleContainerId }) => {
  return (
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
  );
};

export default Navbar;
