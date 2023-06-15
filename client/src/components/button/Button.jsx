import "./Button.css";

const Button = ({ children, type, onClick, className, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
