import { useState } from "react"
import { WeekDayStyle } from "./Habit"

const WeekDay = ({abv, index, treatDaySelection, isClicked}) => {
    const [isSelected, setIsSelected] = useState(false);
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