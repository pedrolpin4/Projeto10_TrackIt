import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { 
    Container, 
    PageTitle, 
    HabitsList 
} from "../../shared/GlobalStyle"
import {
    getTodaysHabits
} from '../../service/trackItService'
import Footer from "../../shared/Footer"
import NavBar from "../../shared/NavBar"
import TodaysHabit from "./TodaysHabit"
import UserContext from "../../contexts/UserContext"
import "dayjs/locale/pt-br"

const TodaysPage = () => {
    const dayjs = require("dayjs")
    dayjs.locale('pt-br')
    const [habits, setHabits] = useState([])
    
    const {
        user
    } = useContext(UserContext)
    
    const config = {
        headers:{
            "Authorization": `Bearer ${user.token}`
        }
    }

    const percentage = 0 //sdas

    const gettingTodaysHabits = (config) => {
        getTodaysHabits(config)
            .then(res => setHabits(res.data))
            .catch(err => console.log(err.response.data))
    }

    useEffect(() => gettingTodaysHabits(config) , [])

    return (
    <>
        <NavBar />
        <Container background = "#E5E5E5">
            <PageTitle>
                {dayjs().format(`dddd, DD/MM`)}
            </PageTitle>
            <HabitsPercentage >
                { 
                percentage
                ?
                `${percentage}% dos hábitos concluídos`
                :
                "Nenhum hábito concluído ainda"
                }
            </HabitsPercentage>
            <HabitsList margin = {habits.length ? "28px" : "0px"} >
                {
                habits.length
                ?
                habits.map(habit => (
                <TodaysHabit habit = {habit} user = {user} key = {habit.id}
                     length = {habits.length}   percentage = {percentage}
                />
                ))
                :
                <h2>
                    Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito para começar a trackear!
                </h2>
                }
            </HabitsList>
        </Container>
        <Footer />
    </>
    )
}

const HabitsPercentage = styled.p`
    font-size: 18px;
    line-height: 23px;
    align-self: flex-start;
    color: ${props => props.percentage ? "#8FC549" : "#BABABA"};
`

export default TodaysPage