import React from 'react';

const FormInput = ({ label, id, name, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 text-white">{label}:</label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full p-2 rounded bg-gray-700 text-white"
        value={value || ''}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;