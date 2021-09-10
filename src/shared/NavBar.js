import styled from "styled-components"
import UserContext from "../contexts/UserContext"
import { useContext } from "react"

const NavBar = () => {
    const{
        user
    } = useContext(UserContext)

    return(
        <NavBarStyle >
                <p>TrackIt</p>
                <img src = {user.image} alt = ""/>
        </NavBarStyle>
    )
}

const NavBarStyle = styled.div`
 position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 70px;
    padding: 10px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img{
        width: 50px;
        height: 50px;
        border-radius: 100px;
    }
    p{
        font-family: 'Playball', cursive;
        color: #FFFFFF;
        font-size: 39px;
    }
`

export default NavBar