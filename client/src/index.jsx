import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Games from "./pages/games";
import Tests from "./pages/tests";
import Music from "./pages/music";
import Lights from "./pages/lights";
import Profile from "./pages/profile";

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/tests" element={<Tests />} />
        <Route path="/register" element={<Register />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lights" element={<Lights />} />
        <Route path="/music" element={<Music />} />
        <Route path="/" element={<Login />} />
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
