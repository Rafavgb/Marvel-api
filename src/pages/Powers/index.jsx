import React from "react"
import { Container } from "./styles";
import Dashboard from "../../components/Dashboard";
import Profile from "../Profile";


const Powers= () => {
    return (
        <>
        <Dashboard/>
        <Profile/>
        <Container>
        <ul>
                    <li>Agility</li>
                    <li>Genius</li>
                    <li>Genius-level intellect</li>
                    <li>Precognitive</li>
                    <li>Pregognitive spider-sense</li>
                    <li>speed</li>
                    <li>spider-sense</li>
                    <li>Superhuman strength</li>
                </ul>
        </Container>
        </>
    )
}

export default Powers;