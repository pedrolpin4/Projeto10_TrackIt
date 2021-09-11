import styled from "styled-components";

const LoginButton = styled.div`
    margin: 6px 0px 25px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 21px;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    opacity: ${props => props.opacity};
`

const LoginSignInChanger = styled.p`
    font-size: 13.976px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`

export {
    LoginButton,
    LoginSignInChanger,
}