import FavouriteSong from "./favourite-song/FavouriteSong";
import "./FavouriteSongs.css";
import Card from "../../UI/card/Card";

const FavouriteSongs = ({ songs, pickSong, removeSong }) => {
  return (
    <Card className="favourite-songs__card">
      <h1 className="favourite-songs__title">Favourites</h1>
      {songs.map((song) => (
        <FavouriteSong
          key={`fav-${song.uri}`}
          song={song}
          pickSong={(track) => pickSong(track)}
          removeSong={(song) => removeSong(song)}
        />
      ))}
    </Card>
  );
};

export default FavouriteSongs;
