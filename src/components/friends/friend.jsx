import PropTypes from 'prop-types';
import { FriendsItem } from './friendsItem';
import { Container, List } from './friends.styled';

export const Friend = ({ friends }) => {
  return (
    <Container>
      <ul>
        {' '}
        {friends.map(friend => (
          <List key={friend.id}>
            <FriendsItem friend={friend} />
          </List>
        ))}
      </ul>
    </Container>
  );
};

Friend.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
