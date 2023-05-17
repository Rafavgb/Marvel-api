import React from "react"
import { Container } from "./styles";
import Dashboard from "../../components/Dashboard";
import Profile from "../Profile";

const Species = () => {
    return (
        <>
            <Dashboard />
            <Profile/>
            <Container>
            <ul>
                    <li>Mutate</li>
                </ul>
            </Container>
        </>
    )
}

export default Species;