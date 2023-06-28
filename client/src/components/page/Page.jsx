import { useContext } from "react";
import "./Page.css";
import { LoggedUserContext } from "../..";
import UserCard from "../game/user-card/UserCard";
import Navbar from "../navigation/navbar/Navbar";

const Page = ({ children }) => {
  const userInfo = useContext(LoggedUserContext);

  return (
    <div className="page">
      <header className="page__header">
        <UserCard
          username={userInfo.user.username}
          photo={userInfo.user.picture}
        />
      </header>
      <div className="page__nav_background"></div>
      <div className="page__center-container">
        <Navbar currentPage="page" />
        <main className="page__content">{children}</main>
      </div>
    </div>
  );
};

export default Page;
