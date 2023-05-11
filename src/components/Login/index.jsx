import React from "react"
import { Button, Container, ContainerLogo, Form, FormContainer, Input } from "../Login/styles";
import { Text } from "../Login/styles";
import Bro from "../../assets/bro.png"
import BemVindo from "../../assets/bem-vindo.png"
import Pontua from "../../assets/logo_pontua_white.png"


const Login = () => { 
    return(
        <Container>
            <ContainerLogo> <img src={Pontua} alt=""></img></ContainerLogo>
            <img src={Bro} alt=""></img>
            <Form>
            <FormContainer>
            <img src={BemVindo} alt=""></img>
            </FormContainer>
            <Text>
                <h2>Informe as suas credencias de acesso ao portal</h2>
                </Text>
            <Input>
            <input type="email" placeholder="Informe seu e-mail"></input>
            </Input>
            <Input>
            <input type="password" placeholder="Informe sua senha"></input>
            </Input>
            <Button><button type="submit">entrar <img src="img/vector.png"></img></button></Button>
            <span>Esqueceu sua senha?</span>
            </Form>
        </Container>
    )
}

export default Login;