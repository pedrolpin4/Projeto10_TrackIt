import styled from "styled-components";

const Habit = ({habit, deleteMyHabit, config}) => {
    const abreviations = ["D", "S", "T", "Q", "Q", "S", "S"];
    return (
        <HabitContainer>
            <div>
                <HabitTitle>
                    {habit.name}
                </HabitTitle>
                <WeekdaySelector>
                    {abreviations.map((abv, i) => (
                        <WeekDayStyle 
                            key = {`${habit.id}${i}`} 
                            isSelected = {habit.days.includes(i)}
                        >
                            {abv}
                        </WeekDayStyle>
                    ))}
                </WeekdaySelector>
            </div>
            <ion-icon name = "trash-outline"
            onClick = {() => deleteMyHabit(habit.id, config)}
            />
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    width: calc(100vw - 34px);
    background: #FFFFFF;
    border-radius: 5px;
`

const HabitTitle = styled.p`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`
const WeekdaySelector = styled.div`
    margin-top: 10px;
    display: flex;
`

const WeekDayStyle = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: ${props => props.isSelected ?  "#FFFFFF" : "#DBDBDB"};
    background: ${props => props.isSelected ? "#DBDBDB" : "#FFFFFF" };
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 7px;
`
export default Habit

export {
    WeekdaySelector,
    WeekDayStyle
}