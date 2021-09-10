import Footer from "../shared/Footer"
import { 
    Container, 
    PageTitle } from "../shared/GlobalStyle"
import NavBar from "../shared/NavBar"

const TrackingRecordPage = () => (
    <>
        <NavBar />
        <Container>
            <PageTitle>
                Histórico
            </PageTitle>
            <h2>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </h2>
        </Container>
        <Footer />
    </>
)

export default TrackingRecordPage