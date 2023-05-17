import React from "react"
import { Container, ContainerLogo, Divider } from "../Dashboard/styles";
import Pontua from "../../assets/Group.png"
import { AiOutlineUser } from "react-icons/ai";
import { BsArrow90DegLeft } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";


const Dashboard = () => {
    return (
        <Container>
            <ContainerLogo><img src={Pontua} alt=""></img></ContainerLogo>
            <Divider/>
            <ul>
                <li><a href="home"><MdOutlineDashboard /> Home</a></li>
                <li><a href="overview"><AiOutlineUser /> Perfil</a></li>
                <li><a href="/"><BsArrow90DegLeft /> Sair</a></li>
            </ul>
        </Container>
    )
}

export default Dashboard;