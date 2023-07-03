import { useEffect, useState } from "react";
import "./SongSearchCard.css";
import SongResults from "./song-results/SongResults";
import Card from "../../UI/card/Card";

const SongSearchCard = ({ accessToken, spotifyApi, pickSong }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) =>
              image.height < smallest.height ? image : smallest,
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  const printResults = () => {
    if (searchResults.length !== 0) {
      return (
        <SongResults
          results={searchResults}
          pickSong={(track) => pickSong(track)}
        />
      );
    }
    return (
      <div className="song-search__empty-input"> Find songs on Spotify </div>
    );
  };

  return (
    <Card className="song-search__card">
      <input
        className="song-search__input"
        placeholder="Search song/artist"
        onChange={(e) => setSearch(e.target.value)}
      />
      {printResults()}
    </Card>
  );
};

export default SongSearchCard;