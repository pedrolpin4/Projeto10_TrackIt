import styled from "styled-components";

const Habit = ({habit, deleteMyHabit, config}) => {
    
    return (
        <HabitContainer>
            <div>
                <HabitTitle>
                    {habit.name}
                </HabitTitle>
                <WeekdaySelector>
                    <div>D</div>
                    <div>S</div>
                    <div>T</div>
                    <div>Q</div>
                    <div>Q</div>
                    <div>S</div>
                    <div>S</div>
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
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        font-size: 20px;
        color: #DBDBDB;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-right: 7px;
    }
`

export default Habit

export {
    WeekdaySelector
}