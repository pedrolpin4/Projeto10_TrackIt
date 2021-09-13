import { useState } from "react"
import { WeekDayStyle } from "./Habit"

const WeekDay = ({abv, index, treatDaySelection, isClicked, weekdays}) => {
    const [isSelected, setIsSelected] = useState(weekdays.includes(index));
    return (
    <WeekDayStyle 
        isSelected = {isSelected}
        onClick = {
        isClicked 
        ? 
        null 
        : 
        () => {
            treatDaySelection(index)
            isSelected ? setIsSelected(false) : setIsSelected(true)
        }
        }
    >
    {abv}
    </WeekDayStyle>
    )
}

export default WeekDay