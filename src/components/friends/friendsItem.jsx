import { Status } from './friends.styled';

export const FriendsItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="user" width={80} padd />
      <p>{name}</p>
    </>
  );
};
