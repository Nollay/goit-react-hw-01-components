
import { InfoUser } from "./infoUser/info-user";
import { StatsUser } from "./statsUser/stats-user";

export const CardUser = ({user: { username, tag, location, avatar, stats },
}) => {
    return (
        <>
            <InfoUser
                avatar={avatar}
                username={username}
                tag={tag}
                location={location}
            />
            <StatsUser
                stats={stats} />
        </>
    )
}