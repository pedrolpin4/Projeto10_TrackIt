import { Link } from "react-router-dom";
import {
    Container,
    LoginButton,
    LoginInput,
    Logo,
    LoginSignInChanger
} from "./style"

const LoginPage = () => (
    <Container>
        <Logo>
            TrackIt
        </Logo>
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
