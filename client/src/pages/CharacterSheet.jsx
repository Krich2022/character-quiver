import React from 'react';

const CharacterSheet = ({ character }) => {
  return (
    <div className="character-sheet">
      <h2>{character.username}</h2>
      <p>Character Name: {character.name}</p>
      <p>Class: {character.class}</p>
      <p>SubClass: {character.subClass}</p>
      <p>Level: {character.level}</p>
      <p>XP: {character.xp}</p>
      <p>Background: {character.background}</p>
    </div>
  );
};

export default CharacterSheet;