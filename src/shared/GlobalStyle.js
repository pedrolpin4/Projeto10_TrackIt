import styled  from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'Lexend Deca', sans-serif;
        overflow-y: visible;
        background-color: #E5E5E5;
        height: 100vh;

        @keyframes moveInRight{
            0%{
                opacity: 0;
                transform: translateX(300px);
            }

            100%{
                opacity: 1;
                transform: translate(0);
            }
        }

        .logo{
            animation: moveInRight .5s ease-in;
            margin-top: 70px
        }
    }

    *{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    input{
        outline: none;
        
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

    ion-icon{
        cursor: pointer;
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
    height: 100%;
    animation: moveInRight .4s ease-in;
`;

const FeatureMessage = styled.h2`
    margin-top: 28px;
    font-size: 18px;
    line-height: 22px;
    align-self: flex-start;
    color: #666666;
`
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
    HabitsList,
    FeatureMessage
}