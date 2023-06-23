import "./WrapCard.css";

const WrapCard = ({ children, className = "", onClick }) => {
  return (
    <div onClick={onClick} className={`wrap-card ${className}`}>
      {children}
    </div>
  );
};

export default WrapCard;
