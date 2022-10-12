export const FriendsList = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <>
            <span></span>
            <img src={avatar} alt="user" />
            <p>{name }</p>
        </>
    )
}