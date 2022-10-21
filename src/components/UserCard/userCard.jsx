import PropTypes from 'prop-types';
import { InfoUser } from './info-user';
import { StatsUser } from './stats-user';

export const UserCard = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className="profile">
      <InfoUser
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <StatsUser stats={stats} />
    </div>
  );
};

UserCard.PropType = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
