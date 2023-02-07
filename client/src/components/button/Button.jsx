import "./Button.css";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
