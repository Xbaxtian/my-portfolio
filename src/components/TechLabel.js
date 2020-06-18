import React from 'react';

const TechLabel = ({ tech, color }) => {
  return (
    <label className="tech-label">
      <span
        className="tech-label__circle"
        style={{ backgroundColor: color || '' }}
      ></span>
      <span className="text-blue-900 font-medium">{tech}</span>
    </label>
  );
};

export default TechLabel;
