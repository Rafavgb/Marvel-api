import React, { useState } from "react"
import { Container, ContainerLogo, FormContainer, Input, Form, ErrorLogin, Button, Message } from "./styles";
import Welcome from "../../assets/welcome.png"
import { useNavigate } from "react-router-dom";
import Pontua from "../../assets/logo_pontua_white.png"


const ResetPassword = () => {
    const navigate = useNavigate("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const handleLogin = () => {
        if (!email) {
            setError("Por favor, preencha o campo.")
            return;
        }
        navigate("/confirmation")
    }
    return (
        <Container>
            <ContainerLogo> <img src={Pontua} alt=""></img></ContainerLogo>
            <img src={Welcome} alt=""></img>
            <Form>
                <FormContainer>
                    <p>Recuperar senha<b>.</b></p>

                </FormContainer>
                <Message>Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir sua senha.</Message>
                <Input>
                    <input type="email" placeholder="Informe seu e-mail" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}></input>
                </Input>
                <ErrorLogin>{error}</ErrorLogin>
                <Button><button type="submit" onClick={handleLogin}> enviar link </button></Button>
            </Form>
        </Container>
    )
}

export default ResetPassword;