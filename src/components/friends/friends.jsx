import { FriendsList } from "./friendsList";
export const Friends = ({ friends }) => {
    return friends.map(friend => (
        <li key={friend.id}>
            <FriendsList friend={friend} />
        </li>
    ));
    
};