import React from 'react';

const IssueCategorySelect = ({ value, onChange, name }) => (
  <div>
    <label className="block text-purple-400 font-medium mb-2" htmlFor="category">
      Issue Category
    </label>
    <select
      id="category"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
    >
      <option value="">Select a category</option>
      <option value="infrastructure">Infrastructure</option>
      <option value="sanitation">Sanitation</option>
      <option value="safety">Public Safety</option>
      <option value="environment">Environment</option>
      <option value="other">Other</option>
    </select>
  </div>
);

export default IssueCategorySelect; 