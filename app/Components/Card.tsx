import { Button, ButtonGroup, Card as ChakraCard, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Link from 'next/link'

interface CardProps {
    id: string;
    name: string;
    species: string;
    image: string;
    house: string;
}


function Card({ name, species, image, house, id }: CardProps) {
    return (
        <Link href={`/character/${id}`}>
            <ChakraCard maxW='sm'>
                <CardBody>
                    <Image src={image} alt={name} width={250} height={300} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>
                            {house}
                        </Text>
                        <Text color='blue.600' fontSize='1xl'>
                            {species.charAt(0).toUpperCase() + species.slice(1)}
                        </Text>
                    </Stack>
                </CardBody>
            </ChakraCard>
        </Link>
    )
}

export default Card;