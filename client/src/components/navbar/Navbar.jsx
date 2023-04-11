import NavItem from "../nav-item/NavItem";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavItem name="profile" active={false} />
      <NavItem name="music" active={false} />
      <NavItem name="lights" active={true} />
    </div>
  );
};

export default Navbar;
