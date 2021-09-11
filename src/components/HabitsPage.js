import {
    Container,
    PageTitle,
    HabitsList
} from "../shared/GlobalStyle"
import styled from "styled-components"
import NavBar from "../shared/NavBar"
import Footer from "../shared/Footer"
import Habit from "./Habit"
import HabitsCreator from "./HabitsCreator"
import { useEffect, useContext, useState } from "react"
import { getUserHabits } from "../service/trackItService"
import UserContext from "../contexts/UserContext"


const HabitsPage = () => {
    const {
        user
    } = useContext(UserContext)

    const [habits, setHabits] = useState([]);
    const [isDoing, setIsDoing] = useState(false)

    const config = {
        headers:{
            "Authorization" : `Bearer ${user.token}`
        }
    }

    const gettingHabits = (config) => {
        getUserHabits(config)
            .then(res => setHabits(res.data))
            .catch(err => alert(err.response.data))
    }

    useEffect(() => gettingHabits(config), [])
    
    return (
    <>
        <NavBar />
        <Container background = "#E5E5E5">
            <PageTitle>
                <h1>Meus hábitos</h1>
                <CreateHabit onClick = {() => setIsDoing(true)}>
                    + 
                </CreateHabit>
            </PageTitle>
            <HabitsList margin = {habits.length ? "20px" : "0px"}>
                {
                isDoing
                ?
                <HabitsCreator setIsDoing = {setIsDoing} 
                config = {config} gettingHabits = {gettingHabits}/>
                :
                ""
                }
                {
                habits.length 
                ? 
                habits.map(habit => <Habit habit = {habit}/>)
                :
                <h2>Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!</h2>
                
                } 
            </HabitsList>
        </Container>
        <Footer />
    </>
    )
}

const CreateHabit = styled.div`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    font-size: 27px;
    text-align: center;
    color: #FFFFFF;
    border-radius: 4.6px;
    cursor: pointer;
`


export default HabitsPage