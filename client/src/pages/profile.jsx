import "./styles.css";
import { useContext } from "react";
import { LoggedUserContext } from "..";
import Page from "../components/page/Page";
import ProfileCard from "../components/profile-card/ProfileCard";

const Profile = () => {
  const userInfo = useContext(LoggedUserContext);

  return (
    <Page>
      <ProfileCard user={userInfo.user} />
    </Page>
  );
};

export default Profile;
