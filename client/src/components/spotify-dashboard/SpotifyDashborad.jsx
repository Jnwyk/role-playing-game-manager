import useSpotifyAuth from "../../hooks/useSpotifyAuth";
import { useEffect, useState } from "react";
import "./SpotifyDashboard.css";
import SongSearch from "../song-search/SongSearch.jsx";
import SpotifyWebApi from "spotify-web-api-node";
import FavouriteSongs from "../favourite-songs/FavouriteSongs";
import SpotifyPlayer from "../spotify-player/SpotifyPlayer";

const spotifyApi = new SpotifyWebApi({
  clientId: "58bb2cc230f84df699fcd6874f054666",
});

const SpotifyDashboard = ({
  code,
  addToFavourites,
  favouriteSongs,
  removeSong,
}) => {
  const accessToken = localStorage.getItem("accessToken");

  const [currentSong, setCurrentSong] = useState();
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useSpotifyAuth(code);

  const pickSong = (track) => {
    setCurrentSong(track);
  };

  const handleAddToFavourites = () => {
    addToFavourites(currentSong);
  };

  return (
    <div className="spotify_dashboard">
      <SpotifyPlayer
        accessToken={accessToken}
        currentSong={currentSong}
        handleAddToFavourites={handleAddToFavourites}
      />
      <div className="spotify-dashboard__second-row">
        <SongSearch
          accessToken={accessToken}
          spotifyApi={spotifyApi}
          pickSong={(track) => pickSong(track)}
        />
        <FavouriteSongs
          songs={favouriteSongs}
          pickSong={(track) => pickSong(track)}
          removeSong={(track) => removeSong(track)}
        />
      </div>
    </div>
  );
};

export default SpotifyDashboard;
