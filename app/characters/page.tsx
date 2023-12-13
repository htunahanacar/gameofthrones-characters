import { Metadata } from 'next'
import CHARACTERS from "../constants/characters.json"
import Card from '../Components/Card'
import { Grid } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Game of Thrones - Character Cards',
}

export default async function Page() {
  return (
    <Grid bg='green.50' justifyItems={'center'} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap={6}>
      {CHARACTERS.map((character) => (
        <Card key={character.id} name={character.name} species={character.species} image={character.image} house={character.house} id={character.id} />
      ))}
    </Grid>
  )
}

