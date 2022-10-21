import './user.css';
export const InfoUser = ({ avatar, username, tag, location }) => {
  return (
    <div className="description">
      <img src={avatar} alt="User-avatar" width={360} />
      <p className="name">{username}</p>
      <p className="text_card">@{tag}</p>
      <p className="text_card">{location}</p>
    </div>
  );
};
