import { Link, useHistory} from "react-router-dom";
import { useState } from "react";
import {
    LoginButton,
    LoginInput,
    LoginSignInChanger
} from "./RegistrationStyles";
import { Container } from "../shared/GlobalStyle"
import {postSignUpInfo} from "../service/trackItService"
import Logo from "../shared/Logo";
import Loader from "react-loader-spinner";


const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const[isClicked, setIsClicked] = useState(false)
    const history = useHistory()
    const userInfo = {
        email,
        password,
        name,
        image
    }

    const SigningUp = (object) => {
        setIsClicked(true)
        postSignUpInfo(object)
        .then(res => {
            console.log(res.data);
             history.push("/")
        })
        .catch(err => {
            alert(`${err.response.data.details}`)
            setIsClicked(false)        
        })
    }

    return (
    <Container background = "#FFFFFF">
        <Logo />
        <LoginInput margin = "32px" placeholder = "email" 
            value = {email} onChange = {e => setEmail(e.target.value)} 
        />
        <LoginInput placeholder = "senha" type = "password"
            value = {password} onChange = {e => setPassword(e.target.value)} 
        />
        <LoginInput placeholder = "nome" 
            value = {name} onChange = {e => setName(e.target.value)} 
        />
        <LoginInput placeholder = "foto" 
            value = {image} onChange = {e => setImage(e.target.value)} 
        />
        
        <LoginButton 
            onClick = {isClicked ? null : () => SigningUp({email, password})}
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
        <Link to = "/">
            <LoginSignInChanger>
                Já tem uma conta? Faça login!
            </LoginSignInChanger>
        </Link>      
    </Container>
)}

export default SignUpPage
