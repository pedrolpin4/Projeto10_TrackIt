import styled from "styled-components";

const NavBar = styled.div`
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

const Footer = styled.div`
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

export {
    NavBar, 
    Footer
}