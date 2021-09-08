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
export default GlobalStyle