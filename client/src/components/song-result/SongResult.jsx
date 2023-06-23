import WrapCard from "../wrap-card/WrapCard";
import "./SongResult.css";

const SongResult = ({ songData, pickSong }) => {
  const handlePlaySong = () => {
    pickSong(songData);
  };
  return (
    <WrapCard className="song-result__card" onClick={handlePlaySong}>
      <img
        className="song-result__image"
        src={songData.albumUrl}
        alt={`${songData.title} cover`}
      />
      <div className="song-result__info">
        <h3>{songData.title}</h3>
        <h5>{songData.artist}</h5>
      </div>
    </WrapCard>
  );
};

export default SongResult;
