import React, { useState, useEffect } from "react";
import CharacterAccordion from "../components/CharacterAccordion";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "../utils/queries";
import { useParams } from "react-router-dom";

const CharacterSheet = () => {
  const [character, setCharacter] = useState({});
  const params = useParams();
  const id = params.id;
  console.log(id);
  const { loading, error, data, refetch } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { characterId: id },
  });

  useEffect(() => {
    if (!loading && !error) {
      console.log("Characters fetched successfully");
      console.log(data);
      setCharacter(data.character);
      console.log(character);
    } else if (error) {
      console.error("Error fetching characters: ", error);
    }
  }, [loading, error]);

  return (
    <>
      <div className="container-background p-4 mt-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CharacterAccordion character={character} />
        )}
      </div>
    </>
  );
};

export default CharacterSheet;
