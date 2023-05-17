import React, { useEffect, useState } from "react"
import { Card, Container } from "./styles";
import Dashboard from "../../components/Dashboard";
import api from "../../services/api"


const Overview = () => {
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
        <>
            <Dashboard />
            <Container>
                {characters.map(character => {
                    return (
                        <>
                            <Card key={character.id} thumbnail={character.thumbnail}>
                                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                    alt={`${character.name}`}></img>
                                <h2>
                                    {character.name}
                                </h2>
                                <p>{character.description}</p>
                            </Card>
                        </>
                    )
                })}

            </Container>
        </>
    )
}


export default Overview;