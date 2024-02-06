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
      {/* Add more input fields for other attributes like equipment, spells, etc. */}
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditCharacterForm;