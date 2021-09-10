import styled from "styled-components"
import { Link } from "react-router-dom"
import ProgressBar from "./ProgressBar"
const Footer = () => {
    return(
        <FooterStyle >
            <Link to = "/habitos">
                <p>Hábitos</p>
            </Link>            
            <Link to = "/hoje">
                <ProgressBar />
            </Link>
            <Link to = "/historico">
                <p>Histórico</p>
            </Link>
        </FooterStyle >
    )
}

const FooterStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 70px;
    padding: 0px 35px;
    position: fixed;
    background: #FFFFFF;
    bottom: 0px;
    left: 0px;
    p{
        font-size: 18px;
        text-align: center;
        color: #52B6FF;
    }
`

export default Footer