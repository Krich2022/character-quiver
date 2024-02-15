import React, { useState } from "react";
import FormInput from "../components/ui/FormInput";
import { useMutation } from "@apollo/client";
import { ADD_CHARACTER_MUTATION } from "../utils/mutations";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";

export default function CharacterCreationForm() {
  const state = useStoreContext();
  const [characterData, setCharacterData] = useState({
    name: "",
    race: "",
    char_class: "",
    sub_class: "",
    level: "",
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
    armor_class: "",
    initiative: "",
    speed: "",
    hit_points: "",
    perception: "",
    hit_dice: "",
  });
  console.log(state);

  const [addCharacter, { loading, error }] = useMutation(
    ADD_CHARACTER_MUTATION
  );
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Convert string values to numbers where necessary
      Object.keys(characterData).forEach((key) => {
        if (
          [
            "level",
            "strength",
            "dexterity",
            "constitution",
            "intelligence",
            "wisdom",
            "charisma",
            "armor_class",
            "initiative",
            "speed",
            "hit_points",
            "perception",
            "hit_dice",
          ].includes(key)
        ) {
          characterData[key] = parseInt(characterData[key], 10);
        }
      });
      console.log(characterData);

      const { data } = await addCharacter({
        variables: {
          player: "johndoe",
          ...characterData,
        },
      });

      console.log("Character created:", data.addCharacter);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating character:", error);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mt-5 container-background p-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4 text-center text-white">
          Complete Character Creation
        </h2>

        {/* Name */}
        <FormInput
          label="Character Name"
          id="name"
          name="name"
          type="text"
          value={characterData.name}
          onChange={handleChange}
        />

        {/* Race */}
        <FormInput
          label="Race"
          id="race"
          name="race"
          type="text"
          value={characterData.race}
          onChange={handleChange}
        />

        {/* Class */}
        <FormInput
          label="Class"
          id="char_class"
          name="char_class"
          type="text"
          value={characterData.char_class}
          onChange={handleChange}
        />

        {/* Subclass */}
        <FormInput
          label="Sub Class"
          id="sub_class"
          name="sub_class"
          type="text"
          value={characterData.sub_class}
          onChange={handleChange}
        />

        {/* Level */}
        <FormInput
          label="Level"
          id="level"
          name="level"
          type="number"
          value={characterData.level}
          onChange={handleChange}
        />

        {/* Strength */}
        <FormInput
          label="Strength"
          id="strength"
          name="strength"
          type="number"
          value={characterData.strength}
          onChange={handleChange}
        />

        {/* Dexterity */}
        <FormInput
          label="Dexterity"
          id="dexterity"
          name="dexterity"
          type="number"
          value={characterData.dexterity}
          onChange={handleChange}
        />

        {/* Constitution */}
        <FormInput
          label="Constitution"
          id="constitution"
          name="constitution"
          type="number"
          value={characterData.constitution}
          onChange={handleChange}
        />

        {/* Intelligence */}
        <FormInput
          label="Intelligence"
          id="intelligence"
          name="intelligence"
          type="number"
          value={characterData.intelligence}
          onChange={handleChange}
        />

        {/* Wisdom */}
        <FormInput
          label="Wisdom"
          id="wisdom"
          name="wisdom"
          type="number"
          value={characterData.wisdom}
          onChange={handleChange}
        />

        {/* Charisma */}
        <FormInput
          label="Charisma"
          id="charisma"
          name="charisma"
          type="number"
          value={characterData.charisma}
          onChange={handleChange}
        />

        {/* AC */}
        <FormInput
          label="Armor Class (AC)"
          id="armor_class"
          name="armor_class"
          type="number"
          value={characterData.armor_class}
          onChange={handleChange}
        />

        {/* Initiative */}
        <FormInput
          label="Initiative"
          id="initiative"
          name="initiative"
          type="number"
          value={characterData.initiative}
          onChange={handleChange}
        />

        {/* Speed */}
        <FormInput
          label="Speed"
          id="speed"
          name="speed"
          type="number"
          value={characterData.speed}
          onChange={handleChange}
        />

        {/* HP */}
        <FormInput
          label="Hit Points (HP)"
          id="hit_points"
          name="hit_points"
          type="number"
          value={characterData.hit_points}
          onChange={handleChange}
        />

        {/* Perception */}
        <FormInput
          label="Perception"
          id="perception"
          name="perception"
          type="number"
          value={characterData.perception}
          onChange={handleChange}
        />

        {/* Hit Dice */}
        <FormInput
          label="Hit Dice"
          id="hit_dice"
          name="hit_dice"
          type="textarea"
          value={characterData.hit_dice}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-colors">
          Create Character
        </button>
      </form>
    </div>
  );
}
