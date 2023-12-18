"use client";
import CHARACTERS from "../constants/characters.json"
import { Center, Grid, Input, InputGroup, Stack, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from '../Components/Card'

interface DataProps {
    id: string;
    name: string;
    species: string;
    image: string;
    house: string;
}

function Search() {
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState<DataProps[]>(CHARACTERS);

    useEffect(
        ()=> {
            const Data = CHARACTERS.filter((character) => character.name.toLowerCase().startsWith(input.toLowerCase()))
            setFilteredData(Data)
    }, [input])

    return (
        <Stack spacing={4}>
            <Container borderWidth='2px' borderRadius='lg' p='15px' bg='white'> 
                <Center justifyContent='center' fontSize='xl'><b>Harry Potter Characters</b></Center>
                <InputGroup p='15px'>
                    <Input placeholder='Search characters...'
                        value={input} onChange={(e) => setInput(e.target.value)}
                    />
                </InputGroup>
            </Container>
            <Center>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap={6}>
                    {filteredData.map((character) => (
                        <Card key={character.id} name={character.name} species={character.species} image={character.image} house={character.house} id={character.id} />
                    ))}
                </Grid>
            </Center>
        </Stack>
    )
}

export default Search;

