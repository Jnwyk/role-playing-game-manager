import "./Button.css";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button type={type} className={`${className} button`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
