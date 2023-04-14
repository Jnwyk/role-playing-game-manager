import { useContext } from "react";
import "./Page.css";
import { LoggedUserContext } from "../..";
import UserCard from "../user-card/UserCard";
import Navbar from "../navbar/Navbar";

const Page = ({ children }) => {
  const userInfo = useContext(LoggedUserContext);

  return (
    <div className="page">
      <header className="page__header">
        <UserCard
          username={userInfo.user.username}
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg"
        />
      </header>
      <div className="page__nav_background"></div>
      <Navbar currentPage="page" />
      <main className="page__content">{children}</main>
    </div>
  );
};

export default Page;
