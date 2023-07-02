import "./Button.css";

const Button = ({ children, type, onClick, className, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
