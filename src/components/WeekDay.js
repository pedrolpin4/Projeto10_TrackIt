
const WeekDay = ({abv, index, treatDaySelection, isClicked}) => {
    return (
    <div onClick = {isClicked ? null : () => treatDaySelection(index)}>
    {abv}
    </div>
    )
}

export default WeekDay