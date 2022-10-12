export const StatInfo = ({ statInfo: { label, percentage } }) => {
    return (
        <>
            <span>{ label}</span>
            <span>{ percentage}</span>
        </>
    )
}