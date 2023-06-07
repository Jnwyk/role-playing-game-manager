import "./FavouriteSongs.css";

const FavouriteSongs = (songs) => {
  return (
    <div>
      {console.log(songs)}
      {songs.songs.map((song) => (
        <p>{song.title}</p>
      ))}
    </div>
  );
};

export default FavouriteSongs;
