import { TransactionsItem } from "./transactions";

export const Transaction = ({ transactions }) => {
    return (
        <table>
    <thead>
    <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
    </thead>

    <tbody>
            {transactions.map(transaction => (
                <tr key={transactions.id}>
                    <TransactionsItem transaction={transaction}/>
                </tr>
        ))}
    </tbody>
</table>
    )
}