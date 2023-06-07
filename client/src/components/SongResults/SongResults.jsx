import "./SongResults.css";
import SongResult from "../song-result/SongResult";

const SongResults = ({ results, pickSong }) => {
  return (
    <div>
      {results.map((song) => (
        <SongResult
          songData={song}
          pickSong={(track) => pickSong(track)}
          key={song.uri}
        />
      ))}
    </div>
  );
};

export default SongResults;
