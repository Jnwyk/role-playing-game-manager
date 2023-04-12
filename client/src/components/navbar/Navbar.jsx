import NavItem from "../nav-item/NavItem";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ currentPage }) => {
  return (
    <nav className="navbar">
      <Link to="/games">
        <NavItem name="games" active={currentPage === "games" ? true : false} />
      </Link>
      <Link to="/profile">
        <NavItem
          name="profile"
          active={currentPage === "profile" ? true : false}
        />
      </Link>
      <Link to="/music">
        <NavItem name="music" active={currentPage === "music" ? true : false} />
      </Link>
      <Link to="/lights">
        <NavItem
          name="lights"
          active={currentPage === "light" ? true : false}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
