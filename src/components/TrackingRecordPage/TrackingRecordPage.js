import Footer from "../../shared/Footer"
import { 
    Container, 
    PageTitle,
    FeatureMessage } from "../../shared/GlobalStyle"
import NavBar from "../../shared/NavBar"

const TrackingRecordPage = () => (
    <>
        <NavBar />
        <Container background = "#E5E5E5">
            <PageTitle>
                Histórico
            </PageTitle>
            <FeatureMessage>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </FeatureMessage>
        </Container>
        <Footer />
    </>
)

export default TrackingRecordPage