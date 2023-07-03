import "./ProfileCard.css";
import Card from "../UI/card/Card";
import Button from "../UI/button/Button";
import axios from "axios";

const ProfileCard = ({ user }) => {
  const handleLogOut = async () => {
    await axios.get("/api/auth/logout").then((res) => {
      if (res.data.message === "logout") {
        window.location.href = "/";
      }
    });
  };

  return (
    <Card>
      <img
        className="profile-card__picture"
        src="https://polki.pl/foto/4_3_LARGE/ile-kosztuje-fretka-domowa-co-je-i-jak-o-nia-dbac-2487860.jpg"
        alt="user-profile"
      />
      <div className="profile-card__data-container">
        <div className="profile-card__data">
          <h6 className="profile-card__title">username</h6>
          <p className="profile-card__text">{user.username}</p>
        </div>
        <div className="profile-card__data">
          <h6 className="profile-card__title">email</h6>
          <p className="profile-card__text">{user.email}</p>
        </div>
        <div className="profile-card__data">
          <h6 className="profile-card__title">password</h6>
          <p className="profile-card__text">********</p>
        </div>
      </div>
      <Button onClick={() => handleLogOut()}>LOG OUT</Button>
    </Card>
  );
};

export default ProfileCard;
