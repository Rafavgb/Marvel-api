import React from "react"
import { Container, Options, Title } from "./styles";
import Dashboard from "../../components/Dashboard";

const Profile = () => {
    return (
        <>
            <Dashboard />
            <Container>
                <Title>Perfil<b> / </b></Title>
                <Options> <ul>
                    <li><a href="overview">Visão geral</a></li>
                    <li><a href="teams">Teams</a></li>
                    <li><a href="powers">Powers</a></li>
                    <li><a href="species">Species</a></li>
                    <li><a href="authors">Authors</a></li>
                </ul></Options>
            </Container>
        </>
    )
}

export default Profile;