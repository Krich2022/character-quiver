import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersRequest } from "../utils/actions";
import CharacterCard from "../components/ui/Card";

export default function Dashboard() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharactersRequest());
  }, [dispatch]);

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard key={character._id} {...character}></CharacterCard>
      ))}
    </div>
  );
}
