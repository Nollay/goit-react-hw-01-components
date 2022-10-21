import { UserCard } from './UserCard/userCard';
import User from './data/user.json';

import { StatisticCard } from './statistic/statisticCard';
import data from './data/data.json';

import { Friend } from './friends/friend';
import friends from './data/friends.json';

import { Transaction } from './transaction/transaction';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <>
      <UserCard user={User} />
      <StatisticCard title="Upload stats" stats={data} />
      <Friend friends={friends} />
      <Transaction transactions={transactions} />
    </>
  );
};
