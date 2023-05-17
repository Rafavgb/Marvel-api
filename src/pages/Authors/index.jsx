import React from "react"
import { Container } from "./styles";
import Dashboard from "../../components/Dashboard";
import Profile from "../Profile";


const Authors = () => {
    return (
        <>
            <Dashboard />
            <Profile />
            <Container>
                <ul>
                    <li>Stan Lee</li>
                    <li>Steve Ditko</li>
                </ul>
            </Container>
        </>
    )
}

export default Authors;