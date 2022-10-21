import PropTypes from 'prop-types';
import { TransactionsItem } from './transactions';
import './transactions.css';

export const Transaction = ({ transactions }) => {
  return (
    <table className="table__head">
      <thead>
        <tr>
          <th className="table__tr">Type</th>
          <th className="table__tr">Amount</th>
          <th className="table__tr">Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr className="table__body__tr" key={transactions.id}>
            <TransactionsItem transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transaction.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
