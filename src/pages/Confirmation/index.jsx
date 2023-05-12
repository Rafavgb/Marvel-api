import React from "react"
import { Button, Container, ContainerLogo, FormContainer, Form } from "./styles";
import Bro from "../../assets/bro.png"
import Pontua from "../../assets/logo_pontua_white.png"
import { Link } from "react-router-dom";

const Confirmation = () => {
    return(
     <Container>
  <ContainerLogo> <img src={Pontua} alt=""></img></ContainerLogo>
            <img src={Bro} alt=""></img>
            <Form>
            <FormContainer>
                <h2>Foi enviado um e-mail para você com instruções de como redefinir a sua senha.</h2>
                </FormContainer>
            <Link to='/'><Button><button type="submit">voltar para login </button></Button></Link>
            </Form>
     </Container>
    )
}

export default Confirmation;