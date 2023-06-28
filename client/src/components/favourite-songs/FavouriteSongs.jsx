import SongResult from "../song-result/SongResult";
import FavouriteSong from "../favourite-song/FavouriteSongs";
import "./FavouriteSongs.css";
import WrapCard from "../wrap-card/WrapCard";

const FavouriteSongs = ({ songs, pickSong, removeSong }) => {
  return (
    <WrapCard className="favourite-songs__card">
      <h1 className="favourite-songs__title">Favourites</h1>
      {songs.map((song) => (
        <FavouriteSong
          key={`fav-${song.uri}`}
          song={song}
          pickSong={(track) => pickSong(track)}
          removeSong={(song) => removeSong(song)}
        />
      ))}
    </WrapCard>
  );
};

export default FavouriteSongs;
