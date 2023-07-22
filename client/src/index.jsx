import React from "react";
import ReactDOM from "react-dom/client";
import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Games from "./pages/games";
import Music from "./pages/music";
import Lights from "./pages/lights";
import LoginLights from "./pages/login-lights";
import Profile from "./pages/profile";
import Game from "./pages/game";

export const LoggedUserContext = createContext();

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login-lights" element={<LoginLights />} />
        <Route path="/lights" element={<Lights />} />
        <Route path="/music" element={<Music />} />
        <Route path="/game/:gameId" element={<Game />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

async function main() {
  const userInfo = await fetch("/api/user").then((res) => res.json());
  console.log(userInfo);
  const root = document.createElement("div");
  const body = document.querySelector("body");
  body.appendChild(root);
  ReactDOM.createRoot(root).render(
    <LoggedUserContext.Provider value={userInfo.user}>
      <App />
    </LoggedUserContext.Provider>
  );
}

main();
