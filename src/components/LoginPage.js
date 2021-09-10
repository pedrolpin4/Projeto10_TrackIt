import { Link, useHistory } from "react-router-dom";
import {
    LoginButton,
    LoginInput,
    LoginSignInChanger
} from "./RegistrationStyles";
import { Container } from "../shared/GlobalStyle"
import { postLoginInfo } from "../service/trackItService"
import Logo from "../shared/Logo";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import Loader from "react-loader-spinner";


const LoginPage = () => {   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isClicked, setIsClicked] = useState(false)
    const history = useHistory()
    const {
        setUser
    } = useContext(UserContext)

    const LoggingIn = (object) => {
        setIsClicked(true)
        postLoginInfo(object)
            .then(res => {
                setUser(res.data)
                history.push("/hoje")
            })
            .catch(err =>{
                alert(`${err.response.data.details}`)
                setIsClicked(false)
            })
    }

    return (
    <Container background = "#FFFFFF">
        <Logo />
        <LoginInput margin = "32px" placeholder = "email" 
        value = {email} onChange = {e => setEmail(e.target.value)}/>
        <LoginInput placeholder = "senha" type = "password"
         value = {password} onChange = {e => setPassword(e.target.value)}/>
        <LoginButton 
            onClick = {isClicked ? null : () => LoggingIn({email, password})}
            opacity = {isClicked ? "0.7" : "1"}
        >
            {
            isClicked
            ?
            <Loader type="ThreeDots" color="#FFFFFF" height={60} width={60} />
            :
            "Entrar"
            }
        </LoginButton>
        <Link to = "/cadastro">
            <LoginSignInChanger>
                Não tem uma conta? Cadastre-se!
            </LoginSignInChanger>
        </Link>      
    </Container>
)}

export default LoginPage
