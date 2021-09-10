import styled from "styled-components"
import Footer from "../shared/Footer"
import { 
    Container, 
    PageTitle, 
    HabitsList 
} from "../shared/GlobalStyle"
import NavBar from "../shared/NavBar"
import TodaysHabit from "./TodaysHabit"

const TodaysPage = () => (
    <>
        <NavBar />
        <Container background = "#E5E5E5">
            <PageTitle>
                Weekday, Date
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

const HabitsPercentage = styled.p`
    font-size: 18px;
    line-height: 23px;
    align-self: flex-start;
    color: #BABABA;
`

export default TodaysPage