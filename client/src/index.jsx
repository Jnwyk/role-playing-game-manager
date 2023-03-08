import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Tests from "./pages/tests";

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/tests" element={<Tests />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

async function main() {
  const root = document.createElement("div");
  const body = document.querySelector("body");
  body.appendChild(root);
  ReactDOM.createRoot(root).render(<App />);
}

main();
