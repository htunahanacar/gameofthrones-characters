import { Metadata } from 'next'
import CHARACTERS from "../constants/characters.json"
import Card from '../Components/Card'

export const metadata: Metadata = {
    title: 'Game of Thrones - Character Cards',
  }

export default async function Page() {
  return (
  <ul>
    {CHARACTERS.map((character) => (
      <Card key={character.id} name={character.name} species={character.species} image={character.image}/>
    ))}
  </ul>
  )
}

