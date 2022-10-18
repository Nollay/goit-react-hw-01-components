import { ListItem } from "./statistic.styled";
export const StatInfo = ({ statInfo: { label, percentage } }) => {
    return (
        <ListItem>
            <span>{ label}</span>
            <span>{ percentage}%</span>
        </ListItem>
    )
}