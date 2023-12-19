import Image from "next/image";
import CHARACTERS from "../../constants/characters.json";
import { Center, Container, Grid, GridItem } from "@chakra-ui/react";

const getCharacter = (id: string) => {
  const foundCharacter = CHARACTERS.find((character) => character.id === id);
  return foundCharacter;
};

export default function CharacterDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const foundCharacter = getCharacter(params.id);
  if (!foundCharacter) {
    return <div>Character not found</div>;
  }
  return (
    <div>
      {foundCharacter && (
        <div>
          <Container
            maxW="100vw"
            height="100vh"
            padding="6"
            bg="green.50"
            centerContent
          >
            <Grid
              marginTop="20px"
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={5}
            >
              <Center>
                <GridItem padding="3">
                  <Image
                    src={foundCharacter.image}
                    width={250}
                    height={300}
                    alt={""}
                  />
                </GridItem>
              </Center>
              <GridItem padding="3">
                Character: <b>{foundCharacter.name}</b>
                <br />
                Alternative Names: <b>{foundCharacter.alternate_names[0]}</b>
                <br />
                Species: <b>{foundCharacter.species}</b>
                <br />
                Gender: <b>{foundCharacter.gender}</b>
                <br />
                House: <b>{foundCharacter.house}</b>
                <br />
                Date of Birth: <b>{foundCharacter.dateOfBirth}</b>
                <br />
                Ancestry: <b>{foundCharacter.ancestry}</b>
                <br />
                Eye Colour: <b>{foundCharacter.eyeColour}</b>
                <br />
              </GridItem>
            </Grid>
          </Container>
        </div>
      )}
    </div>
  );
}
