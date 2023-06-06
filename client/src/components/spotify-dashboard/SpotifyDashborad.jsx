import useSpotifyAuth from "../../hooks/useSpotifyAuth";
import "./SpotifyDashboard.css";

const SpotifyDashboard = ({ code }) => {
  useSpotifyAuth(code);

  return (
    <>
      {console.log(localStorage.getItem("accessToken"))}You have succesfully
      logged into Spotify:
    </>
  );
};

export default SpotifyDashboard;
