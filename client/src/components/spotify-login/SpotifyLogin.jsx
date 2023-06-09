import Button from "../button/Button";
import "./SpotifyLogin.css";

const SpotifyLogin = ({ onClick }) => {
  return (
    <Button className="spotify-button" onClick={onClick}>
      Login to Spotify
    </Button>
  );
};

export default SpotifyLogin;
