import { FriendsItem } from "./friendsItem";
import { Container, List } from "./friends.styled";


export const Friend = ({ friends }) => {
    return <Container>
        <ul> {friends.map(friend => (
        <List key={friend.id}>
            <FriendsItem friend={friend} />
        </List>
            ))}
    </ul>
        </Container>
};


