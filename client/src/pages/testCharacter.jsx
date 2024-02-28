import dnd5eClient from "../utils/dnd5eServer";
import { GET_ALL_CLASSES } from "../utils/queries/classQueries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Transition from "../components/ui/Transition";
import CharacterForm from "../components/CharacterForm";
import { Button } from "react-bootstrap";

import Select from "../components/ui/Select";

export default function CreateCharacter() {
  const [options, setOptions] = useState([]);
  const [selectChoice, setSelectState] = useState();
  const [nextClick, setNextClick] = useState(false);
  const { loading, error, data } = useQuery(GET_ALL_CLASSES, {
    client: dnd5eClient,
  });

  useEffect(() => {
    if (data) {
      setOptions(data.classes);
    }
  }, [data]);
  useEffect(() => {
    if (options.length > 0) {
    }
  }, [options]);

  const handleSelectChange = (event) => {
    setSelectState(event.target.value);
  };

  const handleNextClick = () => {
    setNextClick(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {!nextClick ? (
        <>
          <Select options={options} onChange={handleSelectChange} />
          <Button onClick={handleNextClick}>Next</Button>
        </>
      ) : (
        <CharacterForm />
      )}
    </div>
  );
}
