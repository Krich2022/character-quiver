import dnd5eClient from "../utils/dnd5eServer";
import { GET_ALL_CLASSES } from "../utils/queries/classQueries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import CharacterForm from "../components/create/CharacterForm";
import ClassCard from "../components/create/ClassCard";

export default function CreateCharacter() {
  const [options, setOptions] = useState([]);
  const [nextClick, setNextClick] = useState(false);
  const { loading, error, data } = useQuery(GET_ALL_CLASSES, {
    client: dnd5eClient,
  });
  const [characterState, setCharacterState] = useState({});

  useEffect(() => {
    if (data) {
      const sortedData = [...data.classes].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setOptions(sortedData);
    }
  }, [data]);
  useEffect(() => {
    if (options.length > 0) {
      console.log(options);
    }
  }, [options]);

  const handleNextClick = (title) => {
    setNextClick(true);
    setCharacterState({ charClass: title });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="container-fluid mt-auto">
      {!nextClick ? (
        <div className="row">
          {Array.isArray(options) &&
            options.map((option, index) => (
              <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <ClassCard
                  {...option}
                  key={index}
                  onNextClick={() => handleNextClick(option.name)}
                />
              </div>
            ))}
        </div>
      ) : (
        <CharacterForm {...characterState} />
      )}
    </div>
  );
}
