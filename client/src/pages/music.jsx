import "./styles.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoggedUserContext } from "../";
import Page from "../components/page/Page";
import SpotifyLogin from "../components/music/spotify-login/SpotifyLogin";
import MusicDashboard from "../components/music/music-dashboard/MusicDashborad";
import useFetch from "../hooks/useFetch";

const code = new URLSearchParams(window.location.search).get("code");

const Music = () => {
  const userInfo = useContext(LoggedUserContext);

  const [favouritesChange, setFavouritesChange] = useState(true);
  const [favouriteSongs, loading, error] = useFetch(
    "/api/spotify/favourites",
    favouritesChange
  );

  const handleSpotifyLogin = async () => {
    await axios
      .get("/api/spotify/login")
      .then((res) => (window.location.href = res.request.responseURL));
  };

  const addSongToFavourites = async (song) => {
    if (!song) return;
    const favouriteUris = favouriteSongs.map((song) => song.uri);
    if (favouriteUris.includes(song.uri)) return;
    await axios.post("/api/spotify/favourites", {
      ...song,
      user: userInfo.user.username,
    });
    setFavouritesChange(!favouritesChange);
  };

  const removeSongFromFavourites = async (song) => {
    await axios.delete(`/api/spotify/favourites/${song.title}`);
    setFavouritesChange(!favouritesChange);
  };

  if (!favouriteSongs) return <Page></Page>;
  return (
    <Page>
      {!code ? (
        <SpotifyLogin onClick={handleSpotifyLogin} />
      ) : (
        <MusicDashboard
          code={code}
          favouriteSongs={favouriteSongs.songs}
          addToFavourites={(song) => addSongToFavourites(song)}
          removeSong={(song) => removeSongFromFavourites(song)}
        />
      )}
    </Page>
  );
};

export default Music;
