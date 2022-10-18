import './user.css'
export const StatsUser = ({ stats }) => {
    return (
        <ul className='stats'>
            <li className='label'><span className='text_card'>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li className='label'><span className='text_card'>Views</span>
                <span>{stats.views}</span>
            </li>
            <li className='label'><span className='text_card'>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    );
};