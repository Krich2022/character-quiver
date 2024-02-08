import React, { useEffect, useState } from 'react';
import CharacterSheet from './CharacterSheet';
import AccordionSection from './AccordionSection';

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});

  // Fetch character data from the backend
  useEffect(() => {
    // Replace with actual API call
    fetch('/api/characters/current')
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, []);

  return (
    <div className="character-details">
      <CharacterSheet character={character} />
      <AccordionSection title="Equipment">
        {/* Render equipment details */}
      </AccordionSection>
      <AccordionSection title="Spells">
        {/* Render spells details */}
      </AccordionSection>
      {/* Add more sections as needed */}
      <AccordionSection title="Name">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="SubClass">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Background">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Alignment">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Level">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Xp">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Strength">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Dexterity">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Constitution">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Inteligence">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Wisdom">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Charisma">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Proficiency">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Saving_Throws">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Ac">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Speed">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Hp">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Temp_Hp">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Traits">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Ideals">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Bonds">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Flaws">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Languages">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Money">
        {/* Render spells details */}
      </AccordionSection>
      <AccordionSection title="Abilities">
        {/* Render spells details */}
      </AccordionSection>
      


    </div>
  );
};

export default CharacterDetails;