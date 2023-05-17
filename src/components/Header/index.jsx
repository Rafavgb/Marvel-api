import React from "react"
import { Container } from "./styles";
import Search from "../../assets/search.png"


const Header = () => {
    return (
        <Container>
            <img src={Search} alt=""></img>
            <input type="text" placeholder='Busque um agente' />
        </Container>
    )
}

export default Header;
