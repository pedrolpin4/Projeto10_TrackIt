import { useState } from "react"
import styled from "styled-components"
import { WeekdaySelector } from "./Habit"
import { createHabit } from "../../service/trackItService"
import WeekDay from "./WeekDay"
import Loader from "react-loader-spinner";

const HabitsCreator = ({ setIsDoing, config, gettingHabits, habitStorage, setHabitStorage }) => {
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
            .catch(res =>{
                alert("O campo nome n pode estar vazio")
                setIsClicked(false)
            })
    }

    const treatDaySelection = (weekday) => {
        if (weekdays.includes(weekday)){
            setWeekdays(() => weekdays.filter(e => (weekday !== e)))
        } else {
            setWeekdays([...weekdays, weekday])
        }
    }

    const submitHabit = () => {
        if(weekdays.length !== 0){
            createNewHabit({name: habitsName, days: weekdays} ,config)
            setIsClicked(true)    
        } else alert("Você deve selecionar pelo menos 1 dia da semana!!")
    }

    return(
        <NewHabitContainer>
            <NameInput placeholder = "Nome do Hábito" isClicked = {isClicked}
                onChange = {isClicked ? null : e => {setHabitsName(e.target.value)}}
                background = {isClicked ? "E5E5E5E5" : "FAFAFA"} value = {habitsName}
            />
            <WeekdaySelector>
                {abreviations.map((abv, i) => (
                    <WeekDay abv ={abv} key = {abv+i} isClicked = {isClicked} habitStorage = {habitStorage}
                        index = {i} treatDaySelection = {treatDaySelection} weekdays = {weekdays}
                    />
                ))}
            </WeekdaySelector>
            <ButtonsContainer>
                <CancelButton onClick = {() =>{
                    setIsDoing(false)
                    setHabitStorage({name: habitsName, days: weekdays})
                    console.log(habitStorage);
                }}>
                    Cancelar
                </CancelButton>
                <SubmitButton 
                    onClick = {isClicked ? null : () => submitHabit()}
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
    background-color: ${props => props.isClicked ? "#F2F2F2" : "#FFFFFF"};
    color: ${props => props.isClicked ? "#AFAFAF" : "black"};
    margin-bottom: 6px;
    padding: 10px;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    border-radius: 5px;
    height: 45px;
    font-size: 18px;
`

const ButtonsContainer = styled.div`
    margin-top: 28px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const SubmitButton = styled.div`
    cursor: pointer;
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
    cursor: pointer;
    margin-right: 23px;
    color: #52B6FF;
    font-size: 16px;
`

export default HabitsCreator