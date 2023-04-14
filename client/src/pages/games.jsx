import "./styles.css";
import UserCard from "../components/user-card/UserCard";
import Navbar from "../components/navbar/Navbar";
import { useContext } from "react";
import { LoggedUserContext } from "..";

const Games = () => {
  const loggedUser = useContext(LoggedUserContext);
  return (
    <div className="games">
      <header className="games__header">
        <UserCard
          username="Jnwyk"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg"
        />
      </header>
      <div className="games__nav_background"></div>
      <Navbar currentPage="games" />
      <main className="games__content"></main>
    </div>
  );
};

export default Games;
