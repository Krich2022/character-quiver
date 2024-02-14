import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS_FOR_USER } from "../utils/queries";
import CharacterCard from "../components/ui/Card";

export default function Dashboard() {
  const [charactersState, setCharactersState] = useState([]);
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS_FOR_USER, {
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
    <div>
      {charactersState.map((character) => (
        <CharacterCard key={character._id} {...character}></CharacterCard>
      ))}
    </div>
  );
}
