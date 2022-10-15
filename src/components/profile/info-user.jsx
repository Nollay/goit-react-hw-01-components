
export const InfoUser = ({ avatar, username, tag, location }) => {
    return (
    <div>
        <img src={avatar} alt="User-avatar" width={200} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
    </div>
    )
}