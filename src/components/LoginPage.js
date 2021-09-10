import { Link, useHistory } from "react-router-dom";
import {
    Container,
    LoginButton,
    LoginInput,
    LoginSignInChanger
} from "./style";
import { postLoginInfo } from "../service/trackItService"
import Logo from "../shared/Logo";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext"

const LoginPage = () => {   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const {
        setUser
    } = useContext(UserContext)

    const LoggingIn = (object) => {
        postLoginInfo(object)
            .then(res => {
                setUser(res.data)
                history.push("/habitos")
            })
            .catch(err => alert(`${err.response.data.details}`))
    }

    return (
    <Container background = "#FFFFFF">
        <Logo />
        <LoginInput margin = "32px" placeholder = "email" 
        value = {email} onChange = {e => setEmail(e.target.value)}/>
        <LoginInput placeholder = "senha" type = "password"
         value = {password} onChange = {e => setPassword(e.target.value)}/>
        <LoginButton onClick = {() => LoggingIn({email, password})}>
            Entrar
        </LoginButton>
        <Link to = "/cadastro">
            <LoginSignInChanger>
                Não tem uma conta? Cadastre-se!
            </LoginSignInChanger>
        </Link>      
    </Container>
)}
export default LoginPage
