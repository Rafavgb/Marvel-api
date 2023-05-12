import React from "react"
import { Container, Divider } from "../Dashboard/styles";
import Pontua from "../../assets/logo_pontua_white.png"

const Dashboard = () => { 
    return(
        <Container>
           <img src={Pontua} alt=""></img>
           <Divider/>
           <h2>Home</h2>
           <h2>Perfil</h2>
           <Divider/>
           <h2>Sair</h2>
        </Container>
    )
}

export default Dashboard;