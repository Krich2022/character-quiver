import React, { useState, useEffect } from 'react';
import CharacterAccordion from '../components/CharacterAccordion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCharacterRequest } from '../utils/actions';
import { useParams } from 'react-router-dom';

const CharacterSheet = () => {
  
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCharacterRequest(id));
  }, [dispatch, id]);
  const character = useSelector(state => state.character);

  return (
    <>
      {character && <CharacterAccordion character={character} />}
    </>
  );
};

export default CharacterSheet;