import "./Navbar.css";
import pages from "../assets/data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {pages.map((onePage) => {
          return (
            <li key={onePage.id}>
              <a href={`#${onePage.id}`}>{onePage.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
