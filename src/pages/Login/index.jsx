import React, {Fragment} from "react"
import { Button, Container, ContainerLogo, FormContainer, Input, Text, Form } from "./styles";
import Bro from "../../assets/bro.png"
import BemVindo from "../../assets/bem-vindo.png"
import Pontua from "../../assets/logo_pontua_white.png"
import VectoSenha from "../../assets/vector_senha.png"
import { Link } from "react-router-dom";

const Loginn = () => {
    return(
     <Container>
  <ContainerLogo> <img src={Pontua} alt=""></img></ContainerLogo>
            <img src={Bro} alt=""></img>
            <Form>
            <FormContainer>
                <h2>Informe as suas credencias de acesso ao portal</h2>
                </FormContainer>
            <Input>
            <input type="email" placeholder="Informe seu e-mail"></input>
            </Input>
            <Input>
            <input type="password" placeholder="Informe sua senha"></input>
            </Input>
            <Link to='/select'><Button><button type="submit">entrar </button></Button></Link>
            <Link to ='/resetpassword'><span>Esqueceu sua senha?</span></Link>
            </Form>
     </Container>
    )
}

export default Loginn;