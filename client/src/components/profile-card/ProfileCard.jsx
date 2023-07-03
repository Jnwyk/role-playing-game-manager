import "./ProfileCard.css";
import Card from "../UI/card/Card";
import Button from "../UI/button/Button";
import axios from "axios";
import { useState } from "react";
import TextInput from "../UI/inputs/text-input/TextInput";

const ProfileCard = ({ user, updateUser }) => {
  const [editUser, setEditUser] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    picture: user.picture,
    username: user.username,
    email: user.email,
    password: "********",
    strategy: user.strategy,
  });

  const handleEditInput = (key, value) => {
    setCurrentUser({ ...currentUser, [key]: value });
  };

  const handleUpdateUser = () => {
    setEditUser(false);
    updateUser(currentUser);
  };

  const handleLogOut = async () => {
    await axios.get("/api/auth/logout").then((res) => {
      if (res.data.message === "logout") {
        window.location.href = "/";
      }
    });
  };

  if (editUser === true) {
    return (
      <Card>
        <TextInput
          label="Picture"
          id="picture"
          placeholder="type..."
          changeInput={(value) => handleEditInput("picture", value)}
          value={currentUser.picture}
        />
        <TextInput
          label="Username"
          id="username"
          placeholder="type..."
          changeInput={(value) => handleEditInput("username", value)}
          value={currentUser.username}
        />
        {user.strategy === "local" && (
          <>
            <TextInput
              label="Email"
              id="email"
              placeholder="type..."
              changeInput={(value) => handleEditInput("email", value)}
              value={currentUser.email}
            />
            <TextInput
              label="Password"
              id="password"
              placeholder="type..."
              changeInput={(value) => handleEditInput("password", value)}
              value={currentUser.password}
            />
          </>
        )}
        <Button onClick={() => handleUpdateUser()}>Update</Button>
        <Button onClick={() => handleLogOut()}>LOG OUT</Button>
      </Card>
    );
  }
  return (
    <Card>
      <Button onClick={() => setEditUser(true)}>Edit</Button>
      <img
        className="profile-card__picture"
        src={user.picture}
        alt="user-profile"
      />
      <div className="profile-card__data-container">
        <div className="profile-card__data">
          <h6 className="profile-card__title">username</h6>
          <p className="profile-card__text">{user.username}</p>
        </div>
        {user.strategy === "local" && (
          <>
            <div className="profile-card__data">
              <h6 className="profile-card__title">email</h6>
              <p className="profile-card__text">{user.email}</p>
            </div>
            <div className="profile-card__data">
              <h6 className="profile-card__title">password</h6>
              <p className="profile-card__text">********</p>
            </div>
          </>
        )}
      </div>
      <Button onClick={() => handleLogOut()}>LOG OUT</Button>
    </Card>
  );
};

export default ProfileCard;
