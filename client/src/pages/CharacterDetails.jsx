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
    </div>
  );
};

export default CharacterDetails;