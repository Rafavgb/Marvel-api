import React from "react"
import { Container } from "./styles";
import Dashboard from "../../components/Dashboard";
import Profile from "../Profile";


const Teams = () => {
    return (
        <>
            <Dashboard />
            <Profile />
            <Container>
                <ul>
                    <li>Avengers</li>
                    <li>Defenders</li>
                    <li>Fantastic Four</li>
                    <li>Future Foundation</li>
                    <li>Heroes for Hire</li>
                    <li>The New Avengers</li>
                    <li>X-Mansion</li>
                </ul>
            </Container>
        </>
    )
}

export default Teams;