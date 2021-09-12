import styled  from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'Lexend Deca', sans-serif;
        overflow-y: visible;
    }

    *{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    input{
        &::placeholder {
            color: #dbdbdb;
            font-size: 19px;
        }

        &::-ms-input-placeholder {
            color: #dbdbdb;
            font-size: 19px;
        }

        &:-ms-input-placeholder{
            color: #dbdbdb;
            font-size: 19px;
            opacity: 1;
        }
        margin-bottom: 6px;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #D4D4D4;
        box-sizing: border-box;
        border-radius: 5px;
        height: 45px;
        width: 303px;
        font-size: 18px;
    }
`

const Container = styled.div`
    padding: 0px 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    background-color: ${props => props.background};
    margin: 70px 0px 80px 0px;
    height: 100vh;
    h2{
        margin-top: 28px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;

const PageTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    font-size: 23px;
    color: #126BA5;
`

const HabitsList = styled.div`
    margin-top: ${props => props.margin};
    display: grid;
    gap: 10px 0px;
`

export {
    GlobalStyle,
    Container,
    PageTitle,
    HabitsList
}