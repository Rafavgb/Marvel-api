import React, { useState } from "react"
import { Container, ContainerLogo, FormContainer, Form, ErrorLogin, Input, Message } from "./styles";
import Welcome from "../../assets/welcome.png"
import Pontua from "../../assets/logo_pontua_white.png"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { RiQuestionLine } from "react-icons/ri";
import UserService from '../../services/UserService'

//const userService = new UserService()

const Login = () => {
    const navigate = useNavigate("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = () => {
        if (!email | !password) {
            setError("Por favor, preencha todos os campos.")
            return;
        }
        navigate("/select")
    }

    {/*const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          setLoading(true)
          const response = await userService.login(form)
          console.log('response do Login', response)
          if (response === true) {
            alert('usuário Logado com Sucesso')
            navigate('/agents')
          }
          setLoading(false)
        }
        catch (err) {
          alert('Algo deu errado com o Login' + err)
        }
      } */}


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
                <Button Text="entrar" onClick={handleLogin}></Button>
                <Link to='/resetpassword'><span><RiQuestionLine /> Esqueceu sua senha? </span></Link>
            </Form>
        </Container>
    )
}

export default Login;
