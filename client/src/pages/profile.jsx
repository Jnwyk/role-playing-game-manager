import "./styles.css";
import { useContext } from "react";
import axios from "axios";
import { LoggedUserContext } from "..";
import Page from "../components/page/Page";
import ProfileCard from "../components/profile-card/ProfileCard";

const Profile = () => {
  const userInfo = useContext(LoggedUserContext);

  const updateUser = async (user) => {
    await axios.put(`/api/user/`, { ...user });
  };

  return (
    <Page>
      <ProfileCard
        user={userInfo.user}
        updateUser={(user) => updateUser(user)}
      />
    </Page>
  );
};

export default Profile;
