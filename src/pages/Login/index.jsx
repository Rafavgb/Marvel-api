import React, { useState } from "react"
import { Container, ContainerLogo, FormContainer, Form, ErrorLogin, Input, Message } from "./styles";
import Welcome from "../../assets/welcome.png"
import Pontua from "../../assets/Group.white.png"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { RiQuestionLine } from "react-icons/ri";

const Login = () => {
    const navigate = useNavigate("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleVerifyUser = () => {
        if (email === 'teste@pontua.com' && password === '1234@@') {
            navigate("/select")
        } else {
            setError("Usuário ou senha inválida.")
        }
    }

    return (
        <Container>
            <ContainerLogo> <img src={Pontua} alt=""></img></ContainerLogo>
            <img src={Welcome} alt=""></img>
            <Form>
                <FormContainer>
                    <p>Bem-vindo<b>.</b></p>
                </FormContainer>
                <Message>Informe as suas credencias de acesso ao portal</Message>
                <Input>
                    <input type="email" placeholder="Informe seu e-mail" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}></input>
                </Input>
                <Input>
                    <input type="password" placeholder="Informe sua senha." value={password} onChange={(e) => [setPassword(e.target.value), setError("")]}></input>
                </Input>
                <ErrorLogin>{error}</ErrorLogin>
                <Button Text="entrar" onClick={handleVerifyUser}></Button>
                <Link to='/resetpassword'><span><RiQuestionLine /> Esqueceu sua senha? </span></Link>
            </Form>
        </Container>
    )
}

export default Login;
