import "./formCard.css";

const FormCard = ({ className, children }) => {
  return <form className={`form-card ${className}`}>{children}</form>;
};

export default FormCard;
