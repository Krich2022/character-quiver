import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const CharacterCreationForm = () => {
  const initialCharacterState = {
    player: "",
    name: "",
    class: "",
    sub_class: "",
    level: 1,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    armor_class: 10,
    initiative: 0,
    speed: 30,
    hit_points: 10,
    perception: 0,
    hit_dice: 1,
  };
  const [characterData, setCharacterData] = useState(initialCharacterState);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacterData((prevData) => ({ ...prevData, [name]: isNaN(value) ? value : parseInt(value) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const data = await postData('/api/characters', characterData);
      console.log('Character created:', data);
      setSuccessMessage('Character successfully created!');

      setCharacterData(initialCharacterState);

      navigate('/dashboard');

    } catch (error) {
      console.error('Error creating character:', error);
      setErrorMessage(error.message || 'Error creating character');
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg m-5 container-background">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <h2 className="text-xl font-bold mb-4 text-center text-color m-2">
          Complete Character Creation
        </h2>
        
        {successMessage && <div className="text-green-500">{successMessage}</div>}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

        <div className="grid grid-cols-2 gap-4">
          {Object.keys(characterData).map((key) => (
            <div key={key} className="mb-4">
              <label htmlFor={key} className="block mb-2 text-white capitalize">{key.replace('_', ' ')}:</label>
              <input
                id={key}
                name={key}
                type={typeof characterData[key] === 'number' ? 'number' : 'text'}
                value={characterData[key]}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-colors m-4">
          Create Character
        </button>
      </form>
    </div>
  );
};

export default CharacterCreationForm;