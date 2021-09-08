import styled from "styled-components";

const Container = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    font-family: 'Playball', cursive;
    color: #126BA5;
    text-align: center;
    font-size: 69px;
`;

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
`

const LoginSignInChanger = styled.p`
    font-size: 13.976px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`

const LoginInput = styled.input`
    margin-top: ${props => props.margin ? props.margin : "0px"};
    margin-bottom: 6px;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    border-radius: 5px;
    width: 303px;
    height: 45px;
`;

export {
    Container,
    LoginButton,
    LoginInput,
    Logo,
    LoginSignInChanger
}