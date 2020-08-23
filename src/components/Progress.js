import React from 'react';

const Progress = ({ item }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-medium text-base leading-5 text-gray-800 w-1/3">
        {item.label}
      </span>
      <div className="bg-gray-300 h-3 w-full rounded">
        <div
          className="h-full bg-blue-600 rounded"
          style={{ width: `${item.percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
