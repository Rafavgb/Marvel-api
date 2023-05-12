import React, {Fragment} from "react"
import { Button, Container, ContainerLogo, FormContainer, Input, Text, Form } from "./styles";
import Bro from "../../assets/bro.png"
import BemVindo from "../../assets/bem-vindo.png"
import Pontua from "../../assets/logo_pontua_white.png"
import VectoSenha from "../../assets/vector_senha.png"
import { Link } from "react-router-dom";

const Select = () => {
    return(
     <Container>
  <ContainerLogo> <img src={Pontua} alt=""></img></ContainerLogo>
            <img src={Bro} alt=""></img>
            <Form>
            <FormContainer>
                <h2>Tenha a visão completa do seu agente.</h2>
                <select name="agents" id="agents">
                 <option value="agent">Agent</option>
              </select>
                </FormContainer>
            <Link to='/agents'><Button><button type="submit">Entrar</button></Button></Link>
            </Form>
     </Container>
    )
}

export default Select;