import { CardUser } from './profile/userCard';
import User from './data/user.json'

import { StatisticCard } from './statistic/statisticCard';
import data from './data/data.json';

import { Friends } from './friends/friends';
import friends from './data/friends.json'

export const App = () => {
  return (
  <>
      <CardUser user={User} />
      <StatisticCard title="Upload stats" stats={data} />
      <Friends friends={friends} />
  </>
  );
};
