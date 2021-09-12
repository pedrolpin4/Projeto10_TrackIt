import { Link, useHistory} from "react-router-dom";
import { useState } from "react";
import {
    LoginButton,
    LoginInput,
    LoginSignInChanger,
    LoginForm
} from "./RegistrationStyles";
import { Container } from "../../shared/GlobalStyle"
import {postSignUpInfo} from "../../service/trackItService"
import Logo from "../../shared/Logo";
import Loader from "react-loader-spinner";

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const userInfo = {
        email,
        password,
        name,
        image
    }
    const[isClicked, setIsClicked] = useState(false)
    const history = useHistory()

    const SigningUp = (object, event) => {
        event.preventDefault()
        setIsClicked(true)
        postSignUpInfo(object)
        .then(res => {
            console.log(res.data);
             history.push("/")
        })
        .catch(err => {
            alert(`${err.response.data.message}`)
            setIsClicked(false)        
        })
    }

    return (
    <Container background = "#FFFFFF">
        <Logo />
        <LoginForm onSubmit = {event => SigningUp(userInfo, event)}>
            <LoginInput isClicked = {isClicked} margin = "32px" placeholder = "email" type = "email"
                value = {email} onChange = {isClicked ? null : e => setEmail(e.target.value)} 
            />
            <LoginInput isClicked = {isClicked} placeholder = "senha" type = "password"
                value = {password} onChange = {isClicked ? null : e => setPassword(e.target.value)} 
            />
            <LoginInput isClicked = {isClicked} placeholder = "nome" type = "text"
                value = {name} onChange = {isClicked ? null : e => setName(e.target.value)} 
            />
            <LoginInput isClicked = {isClicked} placeholder = "foto" type = "url"
                value = {image} onChange = {isClicked ? null : e => setImage(e.target.value)} 
            />
            
            <LoginButton type = "submit"
                opacity = {isClicked ? "0.7" : "1"}
            >
                {
                isClicked
                ?
                <Loader type="ThreeDots" color="#FFFFFF" height={60} width={60} />
                :
                "Cadastrar"
                }
            </LoginButton>  
        </LoginForm>      
        <Link to = "/">
            <LoginSignInChanger>
                Já tem uma conta? Faça login!
            </LoginSignInChanger>
        </Link>      
    </Container>
)}

export default SignUpPage
