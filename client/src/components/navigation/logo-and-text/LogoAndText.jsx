import "./LogoAndText.css";
import { BiWorld } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";

const LogoAndText = ({ iconName, text }) => {
  const pickIcon = () => {
    switch (iconName) {
      case "BiWorld":
        return <BiWorld size="26px" color="black" />;
      case "FaCrown":
        return <FaCrown size="26px" color="black" />;
      case "BsPeopleFill":
        return <BsPeopleFill size="26px" color="black" />;
      default:
        return <TfiLayoutWidthDefaultAlt size="26px" color="black" />;
    }
  };
  return (
    <div className="logo-and-text">
      {pickIcon()}
      <p className="logo-and-text__text">{text}</p>
    </div>
  );
};

export default LogoAndText;
