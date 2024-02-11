import React from 'react';
import CharacterDetails from './CharacterDetails';
const CharacterSheet = ({ character }) => {
  return (
    <>
      <CharacterInfo/>
      <CharacterEquipment/>
      <CharacterClass/>
      <CharacterSubClass/>
      <CharacterBackground/>
      <CharacterAlignment/>
      <CharacterLevel/>
      <CharacterXp/>
      <CharacterStrength/>
      <CharacterDexterity/>
      <CharacterConstitution/>
      <CharacterInteligence/>
      <CharacterWisdom/>
      <CharacterCharisma/>
      <CharacterProficiency/>
      <CharacterSavingThrows/>
      <CharacterAc/>
      <CharacterSpeed/>
      <CharacterHp/>
      <CharacterTempHp/>
      <CharacterTraits/>
      <CharacterIdeals/>
      <CharacterBonds/>
      <CharacterFlaws/>
      <CharacterLanguages/>
      <CharacterMoney/>
      <CharacterAbilities/>
      <CharacterSpells/>
    </>
  );
};

export default CharacterSheet;