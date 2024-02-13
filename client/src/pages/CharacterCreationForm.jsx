// CharacterCreationForm.jsx
import React, { useState } from "react";
import FormInput from "../components/ui/FormInput";
import SelectOptions from "../components/ui/SelectOptions";

const CharacterCreationForm = () => {
  const [characterData, setCharacterData] = useState({
    name: "",
    race: "",
    class: "",
    subclass: "",
    background: "",
    alignment: "",
    level: 1,
    xp: 0,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    proficiency: 2,
    ac: 10,
    speed: 30,
    hp: 10,
    tempHp: 0,
    traits: "",
    ideals: "",
    bonds: "",
    flaws: "",
    languages: "",
    cp: 0,
    sp: 0,
    gp: 0,
    pp: 0,
    abilities: "",
    spells: "",
    skills: "",
    equipment: "",
    feats: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(characterData);
    // Here we'd send the characterData to a backend server or store it locally
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 container-background">
        <h2 className="text-xl font-bold mb-4 text-center text-white">
          Complete Character Creation
        </h2>

        {/* Name */}
        <FormInput
          label="Name"
          id="name"
          name="name"
          type="text"
          value={characterData.name}
          onChange={handleChange}
        />

        {/* Race */}
        <SelectOptions
          label="Race"
          id="race"
          name="race"
          options={[
            "Human",
            "Elf",
            "Dwarf",
            "Halfling",
            "Dragonborn",
            "Gnome",
            "Half-Elf",
            "Half-Orc",
            "Tiefling",
          ]}
          value={characterData.race}
          onChange={handleChange}
        />

        {/* Class */}
        <SelectOptions
          label="Class"
          id="class"
          name="class"
          options={[
            "Barbarian",
            "Bard",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Warlock",
            "Wizard",
          ]}
          value={characterData.class}
          onChange={handleChange}
        />

        {/* Subclass */}
        <FormInput
          label="Subclass"
          id="subclass"
          name="subclass"
          type="text"
          value={characterData.subclass}
          onChange={handleChange}
        />

        {/* Background */}
        <FormInput
          label="Background"
          id="background"
          name="background"
          type="text"
          value={characterData.background}
          onChange={handleChange}
        />

        {/* Alignment */}
        <FormInput
          label="Alignment"
          id="alignment"
          name="alignment"
          type="text"
          value={characterData.alignment}
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

        {/* XP */}
        <FormInput
          label="Experience Points"
          id="xp"
          name="xp"
          type="number"
          value={characterData.xp}
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

        {/* Proficiency */}
        <FormInput
          label="Proficiency Bonus"
          id="proficiency"
          name="proficiency"
          type="number"
          value={characterData.proficiency}
          onChange={handleChange}
        />

        {/* AC */}
        <FormInput
          label="Armor Class (AC)"
          id="ac"
          name="ac"
          type="number"
          value={characterData.ac}
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
          id="hp"
          name="hp"
          type="number"
          value={characterData.hp}
          onChange={handleChange}
        />

        {/* Temp HP */}
        <FormInput
          label="Temporary HP"
          id="tempHp"
          name="tempHp"
          type="number"
          value={characterData.tempHp}
          onChange={handleChange}
        />

        {/* Traits */}
        <FormInput
          label="Traits"
          id="traits"
          name="traits"
          type="textarea"
          value={characterData.traits}
          onChange={handleChange}
        />

        {/* Ideals */}
        <FormInput
          label="Ideals"
          id="ideals"
          name="ideals"
          type="textarea"
          value={characterData.ideals}
          onChange={handleChange}
        />

        {/* Bonds */}
        <FormInput
          label="Bonds"
          id="bonds"
          name="bonds"
          type="textarea"
          value={characterData.bonds}
          onChange={handleChange}
        />

        {/* Flaws */}
        <FormInput
          label="Flaws"
          id="flaws"
          name="flaws"
          type="textarea"
          value={characterData.flaws}
          onChange={handleChange}
        />

        {/* Languages */}
        <FormInput
          label="Languages"
          id="languages"
          name="languages"
          type="text"
          value={characterData.languages}
          onChange={handleChange}
        />

        {/* Money */}
        <div className="grid grid-cols-4 gap-4">
          <FormInput
            label="Copper (CP)"
            id="cp"
            name="cp"
            type="number"
            value={characterData.cp}
            onChange={handleChange}
          />
          <FormInput
            label="Silver (SP)"
            id="sp"
            name="sp"
            type="number"
            value={characterData.sp}
            onChange={handleChange}
          />
          <FormInput
            label="Gold (GP)"
            id="gp"
            name="gp"
            type="number"
            value={characterData.gp}
            onChange={handleChange}
          />
          <FormInput
            label="Platinum (PP)"
            id="pp"
            name="pp"
            type="number"
            value={characterData.pp}
            onChange={handleChange}
          />
        </div>

        {/* Abilities */}
        <FormInput
          label="Abilities"
          id="abilities"
          name="abilities"
          type="textarea"
          value={characterData.abilities}
          onChange={handleChange}
        />

        {/* Spells */}
        <FormInput
          label="Spells"
          id="spells"
          name="spells"
          type="textarea"
          value={characterData.spells}
          onChange={handleChange}
        />

        {/* Skills */}
        <FormInput
          label="Skills"
          id="skills"
          name="skills"
          type="text"
          value={characterData.skills}
          onChange={handleChange}
        />

        {/* Equipment */}
        <FormInput
          label="Equipment"
          id="equipment"
          name="equipment"
          type="textarea"
          value={characterData.equipment}
          onChange={handleChange}
        />

        {/* Feats */}
        <FormInput
          label="Feats"
          id="feats"
          name="feats"
          type="textarea"
          value={characterData.feats}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-colors mb-4">
          Create Character
        </button>
      </form>
    </div>
  );
};

export default CharacterCreationForm;
