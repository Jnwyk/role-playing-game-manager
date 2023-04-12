import NavItem from "../nav-item/NavItem";
import "./Navbar.css";

const Navbar = ({ currentPage }) => {
  return (
    <div className="navbar">
      <NavItem name="games" active={currentPage === "games" ? true : false} />
      <NavItem
        name="profile"
        active={currentPage === "profile" ? true : false}
      />
      <NavItem name="music" active={currentPage === "music" ? true : false} />
      <NavItem name="lights" active={currentPage === "light" ? true : false} />
    </div>
  );
};

export default Navbar;
