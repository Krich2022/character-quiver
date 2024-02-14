import React, { useState, useEffect } from "react";
import CharacterAccordion from "../components/CharacterAccordion";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "../utils/queries";
import { useParams } from "react-router-dom";

const CharacterSheet = () => {
  const [character, setCharacter] = useState({});
  const { loading, error, data, refetch } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { characterId: "65cc36fc9cb86f281ade0f61" },
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
