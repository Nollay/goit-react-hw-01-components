import { StatInfo } from "./statInfo";
export const StatisticCard = ({ title, stats }) => {
    return (
    <section>
        {title && <h2>{title}</h2>}
            <ul>
            {stats.map(statInfo => (
            <li key={statInfo.id}>
            <StatInfo statInfo={statInfo} />
            </li>
            ))}
            </ul>
    </section>
);
};