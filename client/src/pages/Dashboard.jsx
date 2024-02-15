import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS_FOR_USER } from "../utils/queries";
import CharacterCard from "../components/ui/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Dashboard() {
  const [charactersState, setCharactersState] = useState([]);
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS_FOR_USER, {
    fetchPolicy: "network-only",
    variables: { username: "johndoe" },
  });

  useEffect(() => {
    if (!loading && !error) {
      console.log("Characters fetched successfully");
      console.log(data);
      setCharactersState(data.user.characters);
      console.log(charactersState);
    } else if (error) {
      console.error("Error fetching characters: ", error);
    }
  }, [loading, error]);
  return (
    <Container>
      <Row>
        {charactersState.map((character) => (
          <CharacterCard key={character._id} {...character}></CharacterCard>
        ))}
      </Row>
    </Container>
  );
}
