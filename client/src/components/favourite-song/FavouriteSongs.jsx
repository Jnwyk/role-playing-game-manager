import SongResult from "../song-result/SongResult";
import WrapCard from "../wrap-card/WrapCard";
import Button from "../button/Button";
import "./FavouriteSong.css";

const FavouriteSong = ({ song, pickSong, removeSong }) => {
  const handleRemoveSong = () => removeSong(song);
  return (
    <div className="favourite-song">
      <SongResult
        songData={song}
        pickSong={(track) => pickSong(track)}
        key={song.uri}
      />
      <Button className="favourite-song__button" onClick={handleRemoveSong}>
        Remove
      </Button>
    </div>
  );
};

export default FavouriteSong;
