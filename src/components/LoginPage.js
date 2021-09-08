import { Link } from "react-router-dom";
import {
    Container,
    LoginButton,
    LoginInput,
    LoginSignInChanger
} from "./style";
import Logo from "../shared/Logo";
import { useState } from "react";

const LoginPage = () => {   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
    <Container background = "#FFFFFF">
        <Logo />
        <LoginInput margin = "32px" placeholder = "email" 
        value = {email} onChange = {e => setEmail(e.target.value)}/>
        <LoginInput placeholder = "senha" type = "password"
         value = {password} onChange = {e => setPassword(e.target.value)}/>
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
)}
export default LoginPage
