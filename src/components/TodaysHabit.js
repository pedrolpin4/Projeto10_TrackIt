import { useState } from "react"
import styled from "styled-components"
import { finishTodaysHabit, undoTodaysHabit } from "../service/trackItService"

const TodaysHabit = ({ user, habit, counter, setCounter }) =>{
    const [isClicked, setIsClicked] = useState(false)

    const markHabit = (config, id) => {
        finishTodaysHabit(config, id)
            .then( res => {
                setIsClicked(true)
                setCounter(counter + 1)
                console.log(res.data);
            })
            .catch(res => console.log(res.response.data))
    }

    const unMarkHabit = (config, id) => {
        undoTodaysHabit(config, id)
            .then( res => {
                setIsClicked(false)
                setCounter(counter - 1)
                console.log(res.data);
            })
            .catch(res => console.log(res.response.data))
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    return (
    <TodaysHabitContainer>
        <div>
            <HabitTitle>{habit.name}</HabitTitle>
            <HabitSequence>
                <p>Sequencia Atual: {habit.currentSequence} dias</p>
                <p>Seu recorde: {habit.highestScore} dias</p>
            </HabitSequence>
        </div>
        <CheckBox isClicked = {isClicked} 
        onClick = {() => {
            isClicked
            ?
            unMarkHabit(config, habit.id)
            :
            markHabit(config, habit.id)
        }}>
            <ion-icon name = "checkbox"/>
        </CheckBox>
    </TodaysHabitContainer>
    )
}

const TodaysHabitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw - 34px);
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
`

const HabitTitle = styled.p`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`

const HabitSequence = styled.div`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    margin-top: 7px;
`

const CheckBox = styled.div`
    color: ${props => props.isClicked ? "#EBEBEB" : "#8FC549"};
    font-size: 69px;
`


export default TodaysHabit