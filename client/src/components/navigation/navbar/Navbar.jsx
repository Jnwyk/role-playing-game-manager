import NavbarItem from "../navbar-item/NavbarItem";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ currentPage }) => {
  return (
    <nav className="navbar">
      <Link to="/games" className="navbar__link">
        <NavbarItem
          name="games"
          logo="games"
          active={currentPage === "games" ? true : false}
        />
      </Link>
      <Link to="/profile" className="navbar__link">
        <NavbarItem
          name="profile"
          logo="profile"
          active={currentPage === "profile" ? true : false}
        />
      </Link>
      <Link to="/music" className="navbar__link">
        <NavbarItem
          name="music"
          logo="music"
          active={currentPage === "music" ? true : false}
        />
      </Link>
      {sessionStorage.getItem("lights") ? (
        <Link to="/lights" className="navbar__link">
          <NavbarItem
            name="lights"
            logo="lights"
            active={currentPage === "light" ? true : false}
          />
        </Link>
      ) : (
        <Link to="/login-lights" className="navbar__link">
          <NavbarItem
            name="lights"
            logo="lights"
            active={currentPage === "light" ? true : false}
          />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
