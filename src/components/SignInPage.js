import { Link } from "react-router-dom";
import {
    Container,
    LoginButton,
    LoginInput,
    Logo,
    LoginSignInChanger
} from "./style"

const SignInPage = () => (
    <Container>
        <Logo>
            TrackIt
        </Logo>
        <LoginInput margin = "32px" placeholder = "email" />
        <LoginInput placeholder = "senha"/>
        <LoginInput placeholder = "nome" />
        <LoginInput placeholder = "foto"/>
        <Link to = "/habitos">
            <LoginButton>
                Cadastrar
            </LoginButton>
        </Link>
        <Link to = "/">
            <LoginSignInChanger>
                Já tem uma conta? Faça login!
            </LoginSignInChanger>
        </Link>      
    </Container>
)

export default SignInPage
