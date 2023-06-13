import "./FileInput.css";

const FileInput = ({ label, placeholder, id, changeInput }) => {
  return (
    <label className="file-input">
      {label}
      <input
        type="file"
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={(e) => changeInput(e.target.value)}
      />
    </label>
  );
};

export default FileInput;
