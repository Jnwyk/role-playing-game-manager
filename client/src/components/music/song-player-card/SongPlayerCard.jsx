import "./SongPlayerCard.css";
import Button from "../../UI/button/Button";
import SongPlayer from "./song-player/SongPlayer";
import Card from "../../UI/card/Card";

const SongPlayerCard = ({
  accessToken,
  currentSong,
  handleAddToFavourites,
}) => {
  return (
    <Card className="spotify-player__card">
      <SongPlayer accessToken={accessToken} track={currentSong} />
      <Button
        className="spotify-player__button"
        onClick={handleAddToFavourites}
      >
        Add to Favourites
      </Button>
    </Card>
  );
};

export default SongPlayerCard;
