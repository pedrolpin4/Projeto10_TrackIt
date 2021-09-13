import { useState } from "react"
import styled from "styled-components"
import { finishTodaysHabit, undoTodaysHabit } from "../../service/trackItService"

const TodaysHabit = ({ user, habit, length, percentage, setPercentage }) =>{
    const [isClicked, setIsClicked] = useState(habit.done)
    const [counter, setCounter] = useState(habit.currentSequence)
    const [sequenceVerifyer, setSequenceVerifyer] = useState(false)

    const markHabit = (config, habit, id) => {
        finishTodaysHabit(config, habit, id)
            .then( res => {
                if(counter+1 >= habit.highestSequence){
                    setSequenceVerifyer(true)
                }
                setIsClicked(true)
                setCounter(counter+1)
                setPercentage((percentage + (100/length)))
            })
            .catch(res => alert(res.response.data.message))
    }

    const unMarkHabit = (config, habit, id) => {
        undoTodaysHabit(config, habit, id)
            .then( res => {
                setIsClicked(false)
                setCounter(counter-1)
                setSequenceVerifyer(false)
                setPercentage(percentage - 100/length)
            })
            .catch(res => alert(res.response.data.message))
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
                <p>Sequencia Atual: 
                    <CurrentSequence isClicked = {isClicked}>{counter} dias</CurrentSequence>
                </p>
                <p>Seu recorde: 
                    <HighestSequence sequenceVerifyer = {sequenceVerifyer}>
                        {sequenceVerifyer ? habit.currentSequence + 1 : habit.highestSequence} dias
                    </HighestSequence>
                </p>
            </HabitSequence>
        </div>
        <CheckBox isClicked = {isClicked} 
        onClick = {() => {
            isClicked
            ?
            unMarkHabit(config, habit, habit.id)
            :
            markHabit(config, habit, habit.id)
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
const CurrentSequence = styled.span`
    color: ${props => props.isClicked ? "#8FC549" : "#666666"};
    margin-left: 5px;
`

const HighestSequence = styled.span`
    color: ${props => props.sequenceVerifyer ? "#8FC549" : "#666666"};
    margin-left: 5px;
`

const HabitSequence = styled.div`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    margin-top: 7px;
`

const CheckBox = styled.div`
    color: ${props => props.isClicked ? "#8FC549" : "#EBEBEB" };
    font-size: 69px;
`


export default TodaysHabit