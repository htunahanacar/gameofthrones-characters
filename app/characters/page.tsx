import { Metadata } from "next";
import Search from "../Components/Search";
import { Container } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Harry Potter",
};

export default async function Page() {
  return (
    <div>
      <Container maxW="100vw" bg="green.50" p="6">
        <Search />
      </Container>
    </div>
  );
}
