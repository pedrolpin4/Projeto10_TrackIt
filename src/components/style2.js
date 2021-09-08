import styled from "styled-components";

const Menu = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 70px;
    padding: 10px 18px;
    display: flex;
    justify-content: space-between;
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

export {
    Menu
}