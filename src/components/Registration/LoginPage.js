import { Link, useHistory } from "react-router-dom";
import {
    LoginButton,
    LoginSignInChanger,
    LoginInput,
    LoginForm
} from "./RegistrationStyles";
import { Container } from "../../shared/GlobalStyle"
import { postLoginInfo } from "../../service/trackItService"
import Logo from "../../shared/Logo";
import { useState, useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import Loader from "react-loader-spinner";


const LoginPage = ({ userLogin }) => {   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isClicked, setIsClicked] = useState(false)
    const history = useHistory()
    const {
        user,
        setUser
    } = useContext(UserContext)

    console.log(userLogin);
    
    const verifyStorage = (userLogin) => {
        if(userLogin){
            if(window.confirm(`Deseja prosseguir como ${userLogin.email}?`)){
                setUser(userLogin)
                history.push("/hoje")
            } 
        }
    }

    useEffect(() => verifyStorage(userLogin), [])
    
    const LoggingIn = (object, event) => {
        event.preventDefault()
        setIsClicked(true)
        postLoginInfo(object)
            .then(res => {
                setUser(res.data)
                localStorage.setItem("userLogin", JSON.stringify(res.data))
                history.push("/hoje")
            })
            .catch(() =>{
                alert("usuário e/ou senha inválidos")
                setIsClicked(false)
            })
    }

    return (
    <Container background = "#FFFFFF">
        <Logo />
        <LoginForm onSubmit = {(event) => LoggingIn({email, password}, event)}>
            <LoginInput placeholder = "email" type = "email" isClicked = {isClicked}
            value = {email} onChange = {isClicked ? null : e => setEmail(e.target.value)}/>
            <LoginInput placeholder = "senha" type = "password" isClicked ={isClicked}
            value = {password} onChange = {isClicked ? null : e => setPassword(e.target.value)}/>
            <LoginButton 
                type = "submit"
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
        </LoginForm>
        <Link to = "/cadastro">
            <LoginSignInChanger>
                Não tem uma conta? Cadastre-se!
            </LoginSignInChanger>
        </Link>      
    </Container>
)}

export default LoginPage
