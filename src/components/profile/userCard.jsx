
import { InfoUser } from "./info-user";
import { StatsUser } from "./stats-user";


export const CardUser = ({user: { username, tag, location, avatar, stats },
}) => {
    return (
        <div className="profile">
            <InfoUser
                avatar={avatar}
                username={username}
                tag={tag}
                location={location}
            />
            <StatsUser
                stats={stats} />
        </div>
    )
}