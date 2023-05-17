import React, { useEffect, useState } from "react"
import { Container, Card, CardList} from "./styles.js";
import api from "../../services/api.js"
import Dashboard from "../../components/Dashboard/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";
import Header from "../../components/Header/index.jsx";


const Home = () => {
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
          {/* <Header/> */}
        <Dashboard />
        <Container>
            <CardList>
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
            </CardList>
       <Pagination/>

        </Container>
        </>
    )
}

export default Home;