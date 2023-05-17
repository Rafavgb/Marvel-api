import React from "react"
import { Container } from "./styles";
import Dashboard from "../../components/Dashboard";
import Profile from "../Profile";
import Abomb from "../../assets/abomb.png"


const Overview = () => {

    return (
        <>
            <Dashboard />
            <Profile/>
            <Container>
            <img src={Abomb} alt=""></img>
                <h2>A-Bomb (HAS)</h2>
                <p>Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers. </p>
            </Container>
        </>
    )
}


export default Overview;