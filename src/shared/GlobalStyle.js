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