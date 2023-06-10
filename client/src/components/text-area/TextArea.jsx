import "./TextArea.css";

const TextArea = ({ label, placeholder, id, changeInput }) => {
  return (
    <label className="text-input">
      {label}
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={(e) => changeInput(e.target.value)}
      />
    </label>
  );
};

export default TextArea;