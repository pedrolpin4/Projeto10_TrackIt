import { useState } from "react"
import styled from "styled-components"
import { WeekdaySelector } from "./Habit"
import { createHabit } from "../service/trackItService"
import WeekDay from "./WeekDay"
import Loader from "react-loader-spinner";

const HabitsCreator = ({ setIsDoing, config, gettingHabits }) => {
    const [habitsName, setHabitsName] = useState("");
    const [weekdays, setWeekdays] = useState([]);
    const [isClicked, setIsClicked] = useState(false)
    const abreviations = ["D", "S", "T", "Q", "Q", "S", "S"];
    
    const createNewHabit = (object, config) => {
        
        createHabit(object, config)
            .then(res => {
                setIsDoing(false)
                gettingHabits(config)
                setWeekdays([])
            })
            .catch(() =>{
                alert("Ops, deu algo errado!!")
                setIsClicked(false)
                setWeekdays([])
            })
    }

    const treatDaySelection = (weekday) => {
        if (weekdays.includes(weekday)){
            setWeekdays(() => weekdays.filter(e => (weekday !== e)))
        } else {
            setWeekdays([...weekdays, weekday])
        }
        console.log(weekdays);
    }

    return(
        <NewHabitContainer>
            <NameInput placeholder = "Nome do Hábito" 
            onChange = {isClicked ? null : e => {setHabitsName(e.target.value)}}
            background = {isClicked ? "E5E5E5E5" : "FAFAFA"}/>
            <WeekdaySelector>
                {abreviations.map((abv, i) => (
                    <WeekDay abv ={abv} key = {abv+i} isClicked = {isClicked}
                        index = {i} treatDaySelection = {treatDaySelection}
                    />
                ))}
            </WeekdaySelector>
            <ButtonsContainer>
                <CancelButton onClick = {() => setIsDoing(false)}>
                    Cancelar
                </CancelButton>
                <SubmitButton 
                    onClick = {isClicked ? null : () => {
                        createNewHabit({name: habitsName, days: weekdays} ,config)
                        setIsClicked(true)
                    }}
                    opacity = {isClicked ? "0.7" : "1"}
                >
                    {
                    isClicked
                    ?
                    <Loader type="ThreeDots" color="#FFFFFF" height={60} width={60} />
                    :
                    "Salvar"
                    }
                </SubmitButton>
            </ButtonsContainer>
        </NewHabitContainer>
    )
}

const NewHabitContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 17px;
    margin-top: 20px;
    width: calc(100vw - 34px);
    background: #FFFFFF;
    border-radius: 5px;
`

const NameInput = styled.input`
    width: calc(100vw - 68px);
    background-color: ${props => props.background};
`

const ButtonsContainer = styled.div`
    margin-top: 28px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const SubmitButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.5px;
    color: #FFFFFF;
    font-size: 16px;
    opacity: ${props => props.opacity};
`

const CancelButton = styled.div`
    margin-right: 23px;
    color: #52B6FF;
    font-size: 16px;
`

export default HabitsCreator