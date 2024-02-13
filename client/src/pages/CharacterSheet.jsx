import React, { useState, useEffect } from 'react';
import CharacterDetails from './CharacterDetails';
// ... other imports for other components

const CharacterSheet = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Replace with actual API call to fetch character data
    const fetchData = async () => {
      try {
        const response = await fetch('API_URL'); // Replace with your API endpoint
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchData();
  }, []);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CharacterDetails character={character} />
      <CharacterName name={character.name}/>
      <CharacterClass class={character.class}/>
      <CharacterSubClass sub_class={character.sub_class}/>
      <CharacterLevel level={character.level}/>
      <CharacterStrength strength={character.strength}/>
      <CharacterDexterity dexterity={character.dexterity}/>
      <CharacterConstitution constitution={character.constitution}/>
      <CharacterIntelligence intelligence={character.intelligence}/>
      <CharacterWisdom wisdom={character.wisdom}/>
      <CharacterCharisma charisma={character.charisma}/>
      <CharacterArmorClass armor_class={character.armor_class}/>
      <CharacterInitiative initiative={character.initiative}/>
      <CharacterSpeed speed={character.speed}/>
      <CharacterHitPoints hit_points={character.hit_points}/>
      <CharacterPerception perception={character.perception}/>
      <CharacterHitDice hit_dice={character.hit_dice}/>
      {/* ... */}
    </>
  );
};

export default CharacterSheet;