import "./Player.css";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = ({ accessToken, track }) => {
  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      uris={track ? [track.uri] : []}
    />
  );
};

export default Player;
