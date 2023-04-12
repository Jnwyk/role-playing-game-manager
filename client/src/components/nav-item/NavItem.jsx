import "./NavItem.css";
import { ReactComponent as MusicLogo } from "./assets/music-notes-svgrepo-com.svg";
import { ReactComponent as BulbLogo } from "./assets/bulb-svgrepo-com.svg";
import { ReactComponent as ProfileLogo } from "./assets/profile-circle-svgrepo-com.svg";
import { ReactComponent as GameLogo } from "./assets/adventure-svgrepo-com.svg";

const NavItem = ({ name, active }) => {
  const pickLogo = () => {
    switch (name) {
      case "music":
        return <MusicLogo />;
      case "lights":
        return <BulbLogo />;
      case "profile":
        return <ProfileLogo />;
      case "games":
        return <GameLogo />;
      default:
        return null;
    }
  };

  return (
    <div className={`nav-item ${active && `active`}`}>
      {pickLogo()}
      <p className="nav-item__name">{name}</p>
    </div>
  );
};

export default NavItem;
