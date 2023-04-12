import NavItem from "../nav-item/NavItem";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ currentPage }) => {
  return (
    <nav className="navbar">
      <Link to="/games" className="navbar__link">
        <NavItem name="games" active={currentPage === "games" ? true : false} />
      </Link>
      <Link to="/profile" className="navbar__link">
        <NavItem
          name="profile"
          active={currentPage === "profile" ? true : false}
        />
      </Link>
      <Link to="/music" className="navbar__link">
        <NavItem name="music" active={currentPage === "music" ? true : false} />
      </Link>
      <Link to="/lights" className="navbar__link">
        <NavItem
          name="lights"
          active={currentPage === "light" ? true : false}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
