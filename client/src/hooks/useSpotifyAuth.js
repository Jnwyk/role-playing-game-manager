import { useEffect, useState } from "react";
import axios from "axios";

export default function useSpotifyAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    if (code === localStorage.getItem("code")) return;
    localStorage.setItem("code", code);
    axios
      .post("http://localhost:3080/api/spotify/login/access", { code })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/music");
      })
      .catch(() => (window.location = "/music"));
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = window.setInterval(() => {
      axios
        .post("http://localhost:3080/api/spotify/login/refresh", {
          refreshToken,
        })
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
          window.history.pushState({}, null, "/music");
        })
        .catch(() => (window.location = "/music"));
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
}
