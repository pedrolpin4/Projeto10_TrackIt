import styled  from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'Lexend Deca', sans-serif;
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
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    font-size: 23px;
    color: #126BA5;
`

export {
    GlobalStyle,
    Container,
    PageTitle
}