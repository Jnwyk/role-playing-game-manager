import SongResult from "../song-result/SongResult";
import "./FavouriteSongs.css";

const FavouriteSongs = ({ songs, pickSong, removeSong }) => {
  const handleRemoveSong = (song) => removeSong(song);
  return (
    <div>
      {songs.map((song) => {
        return (
          <div>
            <SongResult
              songData={song}
              pickSong={(track) => pickSong(track)}
              key={song.uri}
            />
            <button onClick={() => handleRemoveSong(song)}>
              Remove from favourites
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FavouriteSongs;
