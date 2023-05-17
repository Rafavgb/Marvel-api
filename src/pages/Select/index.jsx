import React, { useEffect, useState } from "react"
import { Button, Container, ContainerLogo, FormContainer, Form, Message, Selectbox } from "./styles";
import Welcome from "../../assets/welcome.png"
import Pontua from "../../assets/logo_pontua_white.png"
import { Link } from "react-router-dom";
import api from "../../services/api"

const Select = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        api
            .get('/characters')
            .then(response => {
                setCharacters(response.data.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <ContainerLogo> <img src={Pontua} alt=""></img></ContainerLogo>
            <img src={Welcome} alt=""></img>
            <Form>
                <FormContainer>
                    <p>Selecione o seu agente mais legal<b>.</b></p>
                </FormContainer>
                <Message>Tenha a visão completa do seu agente.</Message>
                {characters.map(character => {
                    return (
                        <>
                            <Selectbox>
                                <select name="agents" id="agents">
                                    <option value="agent">{character.name}</option>
                                </select>
                            </Selectbox>
                        </>
                    )
                })}
                <Link to='/agents'><Button><button type="submit">Entrar</button></Button></Link>
            </Form>
        </Container>
    )
}

export default Select;