import styled from "styled-components"
import Footer from "../shared/Footer"
import { 
    Container, 
    PageTitle, 
    HabitsList 
} from "../shared/GlobalStyle"
import NavBar from "../shared/NavBar"
import TodaysHabit from "./TodaysHabit"
import 'dayjs/locale/es'

const TodaysPage = () => {
    const dayjs = require("dayjs")
    const weekday = require('dayjs/plugin/weekday')
    dayjs.extend(weekday)

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
                Nenhum hábito concluído ainda
            </HabitsPercentage>
            <HabitsList margin = "28px">
                <TodaysHabit />
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