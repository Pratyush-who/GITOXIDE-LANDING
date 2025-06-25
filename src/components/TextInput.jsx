import React from 'react';

const TextInput = ({ label, id, name, value, onChange, placeholder }) => (
  <div>
    <label className="block text-purple-400 font-medium mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
    />
  </div>
);

export default TextInput; 