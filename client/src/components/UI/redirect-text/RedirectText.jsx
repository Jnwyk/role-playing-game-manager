import "./RedirectText.css";

const RedirectText = ({ loginType, onClick }) => {
  const loginText =
    loginType === "traditional" ? "Google" : "traditional method";
  return (
    <p className="redirect-text">
      Sign in with <strong onClick={onClick}>{loginText}</strong>
    </p>
  );
};

export default RedirectText;
