import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Tests from "./pages/tests";

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/tests" element={<Tests />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
