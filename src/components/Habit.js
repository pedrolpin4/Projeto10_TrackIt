import styled from "styled-components";

const Habit = () => (
    <HabitContainer>
        <HabitTitle>
            Ler 1 capítulo de livro
        </HabitTitle>
        <WeekdaySelector>
            <div>D</div>
            <div>D</div>
            <div>D</div>
            <div>D</div>
            <div>D</div>
            <div>D</div>
            <div>D</div>
            <div>D</div>
        </WeekdaySelector>
    </HabitContainer>
)

const HabitContainer = styled.div`
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