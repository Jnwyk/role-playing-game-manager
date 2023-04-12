import "./UserCard.css";

const UserCard = ({ username, photo }) => {
  return (
    <div className="user-card">
      <p className="user-card__username">{username}</p>
      <img src={photo} alt={`${username}-photo`} className="user-card__photo" />
    </div>
  );
};

export default UserCard;
