import React, { useEffect, useState } from 'react';
import CharacterSheet from './CharacterSheet';
import AccordionSection from './AccordionSection';

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});

  // Fetch character data from the backend
  useEffect(() => {
    // Replace with actual API call this is a placeholder
    fetch('/api/characters/current')
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, []);

  return (
    <div className="character-details">
      <CharacterSheet character={character} />
      <AccordionSection title="Equipment">
        <p>{character.equipment}</p>
      </AccordionSection>
      <AccordionSection title="Spells">
      <p>{character.spells}</p>
      </AccordionSection>
      <AccordionSection title="Name">
      <p>{character.name}</p>
      </AccordionSection>
      <AccordionSection title="SubClass">
      <p>{character.subClass}</p>
      </AccordionSection>
      <AccordionSection title="Background">
      <p>{character.background}</p>
      </AccordionSection>
      <AccordionSection title="Alignment">
      <p>{character.alignment}</p>
      </AccordionSection>
      <AccordionSection title="Level">
      <p>{character.level}</p>
      </AccordionSection>
      <AccordionSection title="Xp">
      <p>{character.xp}</p>
      </AccordionSection>
      <AccordionSection title="Strength">
      <p>{character.strength}</p>
      </AccordionSection>
      <AccordionSection title="Dexterity">
      <p>{character.dexterity}</p>
      </AccordionSection>
      <AccordionSection title="Constitution">
      <p>{character.constitution}</p>
      </AccordionSection>
      <AccordionSection title="Inteligence">
      <p>{character.inteligence}</p>
      </AccordionSection>
      <AccordionSection title="Wisdom">
      <p>{character.wisdom}</p>
      </AccordionSection>
      <AccordionSection title="Charisma">
      <p>{character.charisma}</p>
      </AccordionSection>
      <AccordionSection title="Proficiency">
      <p>{character.proficiency}</p>
      </AccordionSection>
      <AccordionSection title="Saving_Throws">
      <p>{character.savingThrows}</p>
      </AccordionSection>
      <AccordionSection title="Ac">
      <p>{character.ac}</p>
      </AccordionSection>
      <AccordionSection title="Speed">
      <p>{character.speed}</p>
      </AccordionSection>
      <AccordionSection title="Hp">
      <p>{character.hp}</p>
      </AccordionSection>
      <AccordionSection title="Temp_Hp">
      <p>{character.tempHp}</p>
      </AccordionSection>
      <AccordionSection title="Traits">
      <p>{character.traits}</p>
      </AccordionSection>
      <AccordionSection title="Ideals">
      <p>{character.ideals}</p>
      </AccordionSection>
      <AccordionSection title="Bonds">
      <p>{character.bonds}</p>
      </AccordionSection>
      <AccordionSection title="Flaws">
      <p>{character.flaws}</p>
      </AccordionSection>
      <AccordionSection title="Languages">
      <p>{character.languages}</p>
      </AccordionSection>
      <AccordionSection title="Money">
      <p>{character.money}</p>
      </AccordionSection>
      <AccordionSection title="Abilities">
      <p>{character.abilities}</p>
      </AccordionSection>
      


    </div>
  );
};

export default CharacterDetails;