import { Button, ButtonGroup, Card as ChakraCard, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface CardProps {
    name: string;
    species: string;
    image: string;
}

const bodyStyle = {
    margin: '0px',
}

const containerStyle = {
    display: 'grid',
    gridTemplateColums: 'repeat(3, 1fr)',
    backgroundColor: 'brown',
    padding: '20px',
    gap: '10px', 
    '@media(max-width:768px)': {gridTemplateColumns: 'repeat(2, 1fr'},
    '@media(max-width:500px)': {gridTemplateColumns: 'repeat(1, 1fr'},
}

const itemStyle = {
    display: 'flex',
    gap: '10px',
    marginLeft: '30px',
    marginRight: '30px',
    marginBottom: '30px',
    marginTop: '30px'
}

function Card({ name, species, image }: CardProps) {

    return (

        <body style={bodyStyle}>
            <div style={containerStyle} className="container">

                <div className="item" style={itemStyle}>Grid Elemanı 1</div>
                <div className="item" style={itemStyle}>Grid Elemanı 2</div>
                <div className="item" style={itemStyle}>Grid Elemanı 3</div>
                <div className="item" style={itemStyle}>Grid Elemanı 4</div>
                <div className="item" style={itemStyle}>Grid Elemanı 5</div>
                <div className="item" style={itemStyle}>Grid Elemanı 6</div>
                <div className="item" style={itemStyle}>Grid Elemanı 7</div>
                <div className="item" style={itemStyle}>Grid Elemanı 8</div>
                <div className="item" style={itemStyle}>Grid Elemanı 9</div>
            </div>


            <div style={itemStyle} className="item">
            <ChakraCard maxW='sm'>
                <CardBody>
                    <Image src={image} alt={name} width={250} height={300} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>
                            We will add description here...
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {species.charAt(0).toUpperCase() + species.slice(1)}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Click to see details...
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </ChakraCard>
            </div>
        </body>
    )
}

export default Card;