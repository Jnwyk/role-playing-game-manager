import "./NavbarItem.css";
import { ReactComponent as MusicLogo } from "./assets/music-notes-svgrepo-com.svg";
import { ReactComponent as BulbLogo } from "./assets/bulb-svgrepo-com.svg";
import { ReactComponent as ProfileLogo } from "./assets/profile-circle-svgrepo-com.svg";
import { ReactComponent as GameLogo } from "./assets/adventure-svgrepo-com.svg";
import { ReactComponent as GenreLogo } from "./assets/world-svgrepo-com.svg";
import { ReactComponent as MasterLogo } from "./assets/crown-svgrepo-com.svg";
import { ReactComponent as PlayersLogo } from "./assets/team-fill-svgrepo-com.svg";

const NavbarItem = ({ name, logo, active }) => {
  const pickLogo = () => {
    switch (logo) {
      case "music":
        return <MusicLogo />;
      case "lights":
        return <BulbLogo />;
      case "profile":
        return <ProfileLogo />;
      case "games":
        return <GameLogo />;
      case "genre":
        return <GenreLogo />;
      case "master":
        return <MasterLogo />;
      case "players":
        return <PlayersLogo />;
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

export default NavbarItem;
