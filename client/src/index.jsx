import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => (
  <React.StrictMode>
    <div>Hello</div>
  </React.StrictMode>
);

async function main() {
  const root = document.createElement("div");
  const body = document.querySelector("body");
  body.appendChild(root);
  ReactDOM.createRoot(root).render(<App />);
}

main();
