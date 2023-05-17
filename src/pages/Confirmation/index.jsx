import React from "react"
import { Container, ContainerLogo, FormContainer, Form, Message } from "./styles";
import Welcome from "../../assets/welcome.png"
import Pontua from "../../assets/Group.white.png"
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Confirmation = () => {
    return (
        <Container>
            <ContainerLogo> <img src={Pontua} alt=""></img></ContainerLogo>
            <img src={Welcome} alt=""></img>
            <Form>
                <FormContainer>
                    <p>Tudo certo<b>;)</b></p>
                </FormContainer>
                <Message>Foi enviado um e-mail para você com instruções de como redefinir a sua senha.</Message>
                <Link to='/'><Button Text="voltar para login"></Button></Link>
            </Form>
        </Container>
    )
}

export default Confirmation;