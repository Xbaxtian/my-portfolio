import React from 'react';

const Column = ({side, children}) => {
  const sides = {
    left: 'column-left',
    right: 'column-right',
  }

  return (
    <div className={`column ${side && sides[side]}`}>
      {children}
    </div>
  );
}

export default Column;
