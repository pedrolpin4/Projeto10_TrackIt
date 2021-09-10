import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { 
    Container, 
    PageTitle, 
    HabitsList 
} from "../shared/GlobalStyle"
import {
    getTodaysHabits
} from '../service/trackItService'
import Footer from "../shared/Footer"
import NavBar from "../shared/NavBar"
import TodaysHabit from "./TodaysHabit"
import UserContext from "../contexts/UserContext"

const TodaysPage = () => {
    const dayjs = require("dayjs")
    const weekday = require('dayjs/plugin/weekday')
    dayjs.extend(weekday)
    const [percentage, setPercentage] = useState(0)
    const [habits, setHabits] = useState([])
    const {
        user
    } = useContext(UserContext)
    const config = {
        headers:{
            "Authorization": `Bearer ${user.token}`
        }
    }

    const gettingTodaysHabits = (config) => {
        getTodaysHabits(config)
            .then(res => setHabits(res.data))
            .catch(err => alert(err.response.data))
    }

    useEffect(() => gettingTodaysHabits(config) , [])

    const localeDay = (dayNumber) => {
        switch (dayNumber) {
            case 0:
                return "Domingo";
            case 1:
                return "Segundo";
            case 2:
                return "Terça";
            case 3:
                return "Quarta";
            case 4:
                return "Quinta";
            case 5:
                return "Sexta";
            case 6:
                return "Sábado";
        }
    }

    return (
    <>
        <NavBar />
        <Container background = "#E5E5E5">
            <PageTitle>
                {localeDay(dayjs().weekday())}, {dayjs().format(`DD/MM`)}
            </PageTitle>
            <HabitsPercentage>
                { 
                percentage
                ?
                `${percentage}% dos hábitos concluídos`
                :
                "Nenhum hábito concluído ainda"
                }
            </HabitsPercentage>
            <HabitsList margin = {habits.length ? "28px" : "0px"}>
                { 
                habits.length
                ?
                habits.map(habit => <TodaysHabit habit = {habit}/>)
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
    color: #BABABA;
`

export default TodaysPage