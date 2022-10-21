import './transactions.css';
export const TransactionsItem = ({
  transaction: { id, type, amount, currency },
}) => {
  return (
    <>
      <th className="table__body__tr">{type}</th>
      <th className="table__body__tr">{amount}</th>
      <th className="table__body__tr">{currency}</th>
    </>
  );
};
