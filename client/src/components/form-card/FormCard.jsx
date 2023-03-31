import "./formCard.css";

const FormCard = ({ className, children }) => {
  return <form className={`card ${className}`}>{children}</form>;
};

export default FormCard;
