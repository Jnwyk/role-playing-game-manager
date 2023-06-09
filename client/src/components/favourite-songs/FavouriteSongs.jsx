import SongResult from "../song-result/SongResult";
import FavouriteSong from "../favourite-song/FavouriteSongs";
import "./FavouriteSongs.css";

const FavouriteSongs = ({ songs, pickSong, removeSong }) => {
  return (
    <div>
      {songs.map((song) => (
        <FavouriteSong
          key={`fav-${song.uri}`}
          song={song}
          pickSong={(track) => pickSong(track)}
          removeSong={(song) => removeSong(song)}
        />
      ))}
    </div>
  );
};

export default FavouriteSongs;
