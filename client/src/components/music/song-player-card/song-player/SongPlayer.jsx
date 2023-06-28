import "./SongPlayer.css";
import SpotifyPlayer from "react-spotify-web-playback";

const SongPlayer = ({ accessToken, track }) => {
  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      styles={{
        bgColor: "#212121",
        color: "#fff",
        trackNameColor: "#fff",
        trackArtistColor: "#b3b3b3",
        sliderColor: "#fff",
        sliderHandleColor: "#fff",
        sliderHandleBorderRadius: "100px",
        sliderTrackBorderRadius: "100px",
      }}
      token={accessToken}
      showSaveIcon
      uris={track ? [track.uri] : []}
      hideAttribution={true}
    />
  );
};

export default SongPlayer;
