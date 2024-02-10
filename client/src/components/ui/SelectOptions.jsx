// SelectOptions.jsx
import React from 'react';

const SelectOptions = ({ options, value, onChange, placeholder }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 text-white">
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
      <option value="__custom__">Other (Please Specify)</option>
    </select>
  );
};

export default SelectOptions;