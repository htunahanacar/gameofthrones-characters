import { Container } from "@chakra-ui/react";
import { Metadata } from "next"; // id:0001 - Sayfa ismini değiştirmek için eklendi.
import Link from "next/link"; // id:0002 - Linkleri eklemek için eklendi.

// id:0001 - Sayfa ismini değiştirmek için eklendi.
export const metadata: Metadata = {
  title: "Harry Potter",
};

// id:0000 - Sayfada gösterilen içerikler
export default function Home() {
  return (
    <main>
      <Container maxW="100vw" height="100vh" padding="6" bg="green.50">
        <h1>Hello, This is Index Page!</h1>
        <p>
          Click to reach{" "}
          <b>
            <Link href="/characters">Character Cards</Link>
          </b>{" "}
          Page
        </p>
      </Container>
    </main>
  );
}
