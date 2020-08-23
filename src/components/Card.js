import React from 'react';

const Card = ({ children, className, ...others }) => {
  return (
    <div
      className={`rounded overflow-hidden shadow-lg p-5 bg-white inline-block ${className}`}
      {...others}
    >
      {children}
    </div>
  );
};

export default Card;
