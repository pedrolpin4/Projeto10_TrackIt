import { Link, useHistory} from "react-router-dom";
import {
    Container,
    LoginButton,
    LoginInput,
    LoginSignInChanger
} from "./style";
import {
    postSignUpInfo
} from "../service/trackItService"
import Logo from "../shared/Logo";
import { useState } from "react";

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory()
    const userInfo = {
        email,
        password,
        name,
        image
    }

    const SigningUp = (object) => {
        postSignUpInfo(object)
        .then(res => {
            console.log(res.data);
             history.push("/")
            })
        .catch(err => alert(`${err.response.data.details}`))
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
        
        <LoginButton onClick = {() => SigningUp(userInfo)}>
            Cadastrar
        </LoginButton>
        
        <Link to = "/">
            <LoginSignInChanger>
                Já tem uma conta? Faça login!
            </LoginSignInChanger>
        </Link>      
    </Container>
)}

export default SignUpPage
