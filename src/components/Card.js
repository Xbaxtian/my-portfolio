import React from 'react';

const Card = ({children, className, ...others}) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white ${className}`} {...others}>
      {children}
    </div>
  );
};

export default Card;
