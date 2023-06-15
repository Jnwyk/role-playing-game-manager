import "./WrapCard.css";

const WrapCard = ({ children, className = "" }) => {
  return <div className={`wrap-card ${className}`}>{children}</div>;
};

export default WrapCard;
