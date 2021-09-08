import{
    NavBar,
    Footer
} from "./style2"
import { Link } from 'react-router-dom'
import {
    Container,
    PageTitle,
    CreateHabit
} from "./style"

const HabitsPage = () => (
    <>
    <NavBar>
        <p>TrackIt</p>
        <img src = "https://render.fineartamerica.com/images/rendered/default/flat/round-beach-towel/images-medium-5/tyrion-lannister-peter-dinklage-game-of-thrones-artwork-2-sheraz-a.jpg?&targetx=0&targety=-207&imagewidth=788&imageheight=1202&modelwidth=788&modelheight=788&backgroundcolor=1A140D&orientation=0" alt = ""/>
    </NavBar>
    <Container background = "#E5E5E5">
        <PageTitle>
            <h1>Meus hábitos</h1>
            <CreateHabit onClick = {() => console.log("oiii")}> + </CreateHabit>
        </PageTitle>
        <h2>Você não tem nenhum hábito cadastrado ainda. 
            Adicione um hábito para começar a trackear!</h2>
    </Container>
    <Footer>
        <Link to = "/habitos">
            <p>Hábitos</p>
        </Link>
        <Link to = "/historico">
            <p>Histórico</p>
        </Link>
    </Footer>
    </>
)

export default HabitsPage