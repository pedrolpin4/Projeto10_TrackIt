import { Link } from "react-router-dom";
import {
    Container,
    LoginButton,
    LoginInput,
    LoginSignInChanger
} from "./style";
import Logo from "../shared/Logo";

const SignInPage = () => (
    <Container background = "#FFFFFF">
        <Logo />
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
