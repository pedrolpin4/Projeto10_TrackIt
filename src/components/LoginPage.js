import { Link } from "react-router-dom";
import {
    Container,
    LoginButton,
    LoginInput,
    LoginSignInChanger
} from "./style";
import Logo from "../shared/Logo";

const LoginPage = () => (
    <Container background = "#FFFFFF">
        <Logo />
        <LoginInput margin = "32px" placeholder = "email" />
        <LoginInput placeholder = "senha"/>
        <Link to = "/habitos">
            <LoginButton>
                Entrar
            </LoginButton>
        </Link>
        <Link to = "/cadastro">
            <LoginSignInChanger>
                Não tem uma conta? Cadastre-se!
            </LoginSignInChanger>
        </Link>      
    </Container>
)

export default LoginPage
