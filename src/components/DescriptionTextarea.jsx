import React from 'react';

const DescriptionTextarea = ({ label, id, name, value, onChange, rows, placeholder }) => (
  <div>
    <label className="block text-purple-400 font-medium mb-2" htmlFor={id}>
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
    ></textarea>
  </div>
);

export default DescriptionTextarea; 