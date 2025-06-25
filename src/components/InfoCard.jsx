import React from 'react';

const InfoCard = ({ title, children }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
    <h3 className="text-xl font-semibold text-purple-400 mb-4">
      {title}
    </h3>
    {children}
  </div>
);

export default InfoCard; 