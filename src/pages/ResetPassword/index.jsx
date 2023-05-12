import React from "react"
import { Button, Container, ContainerLogo, FormContainer, Input, Form } from "./styles";
import Bro from "../../assets/bro.png"

import Pontua from "../../assets/logo_pontua_white.png"
import { Link } from "react-router-dom";

const ResetPassword = () => {
    return(
     <Container>
  <ContainerLogo> <img src={Pontua} alt=""></img></ContainerLogo>
            <img src={Bro} alt=""></img>
            <Form>
            <FormContainer>
                <h2>Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir sua senha.</h2>
                </FormContainer>
            <Input>
            <input type="email" placeholder="Informe seu e-mail"></input>
            </Input>
            <Link to='/confirmation'><Button><button type="submit">enviar link </button></Button></Link>
            </Form>
     </Container>
    )
}

export default ResetPassword;