import styled from "styled-components";

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
    background: #52B6FF;
    border: none;
    border-radius: 5px;
    opacity: ${props => props.opacity};
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
    text-decoration-line: underline;
    color: #52B6FF;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export {
    LoginButton,
    LoginSignInChanger,
    LoginInput,
    LoginForm
}