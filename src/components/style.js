import styled from "styled-components";

const Container = styled.div`
    padding: 0px 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.background};
    margin-top: 70px;
    height: calc(100vh - 140px);

    h2{
        margin-top: 28px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;

const PageTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 28px;
    font-size: 23px;
    color: #126BA5;
`

const CreateHabit = styled.div`
    align-self: flex-end;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    font-size: 27px;
    text-align: center;
    color: #FFFFFF;
    border-radius: 4.6px;
`

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
//passar para css grid

export {
    Container,
    LoginButton,
    LoginInput,
    LoginSignInChanger,
    PageTitle,
    CreateHabit
}