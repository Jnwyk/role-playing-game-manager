import "./SongResult.css";

const SongResult = ({ songData, pickSong }) => {
  const handlePlaySong = () => {
    pickSong(songData);
  };
  return (
    <div onClick={handlePlaySong}>
      <img src={songData.albumUrl} alt={`${songData.title} cover`} />
      <div>
        <h3>{songData.title}</h3>
        <h5>{songData.artist}</h5>
      </div>
    </div>
  );
};

export default SongResult;
