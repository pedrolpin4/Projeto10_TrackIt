import styled from "styled-components";


const RegistrationContainer = styled.div`
    padding: 0px 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    background-color: #fff;
    height: 100vh;
    animation: moveInRight .4s ease-in;
`

const WhiteBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: -1;
`

const LoginButton = styled.button`
    cursor: pointer;
    margin: 6px 0px 25px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 21px;
    width: 303px;
    height: 45px;
    background: linear-gradient(to right bottom, #52B6FF, #2572e8);
    border: none;
    border-radius: 5px;
    opacity: ${props => props.opacity};
    box-shadow: 0 2px 4px 0px rgba(0,0,0, 0.3);
    transition: all .2s ease-in;

    &:hover{
        box-shadow: 0 5px 8px 0px rgba(0,0,0, 0.3);
        transform: translateY(-3px);
        background-color: linear-gradient(to right bottom, #4169e1, #52B6FF);
    }
    &:active{
        box-shadow: 0 2.5px 5px 0px rgba(0,0,0, 0.3);
        transform: translateY(-1px);
    }
`

const LoginInput = styled.input`
    margin-bottom: 6px;
    padding: 10px;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    border-radius: 5px;
    height: 45px;
    width: 303px;
    font-size: 18px;
    background-color: ${props => props.isClicked ? "#F2F2F2" : "#FFFFFF"};
    color: ${props => props.isClicked ? "#AFAFAF" : "black"};
`

const LoginSignInChanger = styled.p`
    font-size: 13.976px;
    text-align: center;
    text-decoration: none;
    color: #52B6FF;
    transition: all .2s;
    animation: moveInRight .5s ease-in;

    &:hover{
        filter: brightness(1.2);
    }
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    animation: moveInRight .5s ease-in;
`

export {
    LoginButton,
    LoginSignInChanger,
    LoginInput,
    LoginForm,
    RegistrationContainer,
    WhiteBackground
}