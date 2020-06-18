import React from 'react';

const Banner = ({ children }) => {
  return (
    <div className="stars-backgound">
      <div className="stars" />
      <div className="stars-2" />
      <div className="stars-3" />
      <div className="flex flex-col h-full items-center justify-center text-white px-4">
        {children}
      </div>
    </div>
  );
};

export default Banner;
