import React, { useState } from 'react';

const EditCharacterForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="money">Money:</label>
      <input
        type="number"
        id="money"
        name="money"
        value={values.money || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="equipment">Equipment:</label>
      <input
        type="text"
        id="equipment"
        name="equipment"
        value={values.equipment || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="spells">Spells:</label>
      <input
        type="text"
        id="spells"
        name="spells"
        value={values.spells || ''}
        onChange={handleChange}
      />
       <label htmlFor="level">Level:</label>
      <input
        type="number"
        id="level"
        name="level"
        value={values.level || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="xp">XP:</label>
      <input
        type="number"
        id="xp"
        name="xp"
        value={values.xp || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="class">Class:</label>
      <input
        type="text"
        id="class"
        name="class"
        value={values.class || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="sub_class">Sub Class:</label>
      <textarea
        type="text"
        id="sub_class"
        name="sub_class"
        value={values.subClass || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="alignment">Alignment:</label>
      <input
        type="text"
        id="alignment"
        name="alignment"
        value={values.alignment || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="strength">Strength:</label>
      <input
        type="number"
        id="strength"
        name="strength"
        value={values.strength || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="dexterity">Dexterity:</label>
      <input
        type="number"
        id="dexterity"
        name="dexterity"
        value={values.dexterity || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="constitution">Constitution:</label>
      <input
        type="number"
        id="constitution"
        name="constitution"
        value={values.constitution || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="intelligence">Intelligence:</label>
      <input
        type="number"
        id="intelligence"
        name="intelligence"
        value={values.intelligence || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="wisdom">Wisdom:</label>
      <input
        type="number"
        id="wisdom"
        name="wisdom"
        value={values.wisdom || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="charisma">Charisma:</label>
      <input
        type="number"
        id="charisma"
        name="charisma"
        value={values.charisma || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="proficiency">Proficiency:</label>
      <input
        type="number"
        id="proficiency"
        name="proficiency"
        value={values.proficiency || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="savingThrows">Saving Throws:</label>
      <input
        type="text"
        id="savingThrows"
        name="savingThrows"
        value={values.savingThrows || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="ac">AC:</label>
      <input
        type="number"
        id="ac"
        name="ac"
        value={values.ac || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="speed">Speed:</label>
      <input
        type="text"
        id="speed"
        name="speed"
        value={values.speed || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="hp">HP:</label>
      <input
        type="number"
        id="hp"
        name="hp"
        value={values.hp || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="tempHp">Temp HP:</label>
      <input
        type="number"
        id="tempHp"
        name="tempHp"
        value={values.tempHp || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="traits">Traits:</label>
      <textarea
        type="text"
        id="traits"
        name="traits"
        value={values.traits || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="ideals">Ideals:</label>
      <textarea
        type="text"
        id="ideals"
        name="ideals"
        value={values.ideals || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="bonds">Bonds:</label>
      <textarea
        type="text"
        id="bonds"
        name="bonds"
        value={values.bonds || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="flaws">Flaws:</label>
      <textarea
        type="text"
        id="flaws"
        name="flaws"
        value={values.flaws || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="languages">Languages:</label>
      <textarea
        type="text"
        id="languages"
        name="languages"
        value={values.languages || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="abilities">Abilities:</label>
      <textarea
        type="text"
        id="abilities"
        name="abilities"
        value={values.abilities || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="spells">Spells:</label>
      <textarea
        type="text"
        id="spells"
        name="spells"
        value={values.spells || ''}
        onChange={handleChange}
      />
      {}
      <label htmlFor="name">Name:</label>
      <textarea
        type="text"
        id="name"
        name="name"
        value={values.name || ''}
        onChange={handleChange}
      />
      {}
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditCharacterForm;