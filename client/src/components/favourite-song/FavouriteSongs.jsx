import SongResult from "../song-result/SongResult";
import "./FavouriteSong.css";

const FavouriteSong = ({ song, pickSong, removeSong }) => {
  const handleRemoveSong = () => removeSong(song);
  return (
    <div>
      <SongResult
        songData={song}
        pickSong={(track) => pickSong(track)}
        key={song.uri}
      />
      <button onClick={handleRemoveSong}>Remove from favourites</button>
    </div>
  );
};

export default FavouriteSong;
