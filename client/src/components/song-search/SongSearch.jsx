import { useEffect, useState } from "react";
import "./SongSearch.css";
import SongResults from "../SongResults/SongResults";

const SongSearch = ({ accessToken, spotifyApi, pickSong }) => {
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
  return (
    <div type="search">
      <input
        placeholder="Search song/artist"
        onChange={(e) => setSearch(e.target.value)}
      />
      <SongResults
        results={searchResults}
        pickSong={(track) => pickSong(track)}
      />
    </div>
  );
};

export default SongSearch;
