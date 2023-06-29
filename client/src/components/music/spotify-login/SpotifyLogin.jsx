import Button from "../../UI/button/Button";
import "./SpotifyLogin.css";

const SpotifyLogin = ({ onClick }) => {
  return (
    <Button className="spotify-login__button" onClick={onClick}>
      Login to Spotify
    </Button>
  );
};

export default SpotifyLogin;
