export const TransactionsItem = ({ transaction: { id, type, amount, currency } }) => {
    return (
        <>
            <th>{type }</th>
            <th>{amount}</th>
            <th>{currency}</th>
        </>
    );
};