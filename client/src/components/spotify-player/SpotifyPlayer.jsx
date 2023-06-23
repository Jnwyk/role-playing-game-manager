import "./SpotifyPlayer.css";
import Button from "../button/Button";
import Player from "../player/Player";
import WrapCard from "../wrap-card/WrapCard";

const SpotifyPlayer = ({ accessToken, currentSong, handleAddToFavourites }) => {
  return (
    <WrapCard className="spotify-player__card">
      <Player accessToken={accessToken} track={currentSong} />
      <Button
        className="spotify-player__button"
        onClick={handleAddToFavourites}
      >
        Add to Favourites
      </Button>
    </WrapCard>
  );
};

export default SpotifyPlayer;
