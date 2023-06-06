import "./styles.css";
import axios from "axios";
import Page from "../components/page/Page";
import SpotifyLogin from "../components/spotify-login/SpotifyLogin";
import SpotifyDashboard from "../components/spotify-dashboard/SpotifyDashborad";

const code = new URLSearchParams(window.location.search).get("code");

const Music = () => {
  const handleSpotifyLogin = async () => {
    await axios
      .get("/api/spotify/login")
      .then((res) => (window.location.href = res.request.responseURL));
  };

  return (
    <Page>
      {!code ? (
        <SpotifyLogin onClick={handleSpotifyLogin} />
      ) : (
        <SpotifyDashboard code={code} />
      )}
    </Page>
  );
};

export default Music;
