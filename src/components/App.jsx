import { CardUser } from './profile/userCard';
import User from './data/user.json'

import { StatisticCard } from './statistic/statisticCard';
import data from './data/data.json';

import { Friend } from './friends/friendsList';
import friends from './data/friends.json'

import { Transaction } from './transaction/transactionHistory';
import transactions from './data/transactions.json';

export const App = () => {
  return (
  <>
      <CardUser user={User} />
      <StatisticCard title="Upload stats" stats={data} />
      <Friend friends={friends} />
      <Transaction transactions={transactions}/>
  </>
  );
};
