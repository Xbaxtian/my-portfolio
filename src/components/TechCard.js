import React from 'react';
import Card from './ui/Card';
import Progress from './Progress';

const TechCard = ({ title, list }) => {
  return (
    <Card className="w-full">
      <h2 className="title">{title}</h2>
      {list.map((item, key) => (
        <Progress key={key.toString()} item={item} />
      ))}
    </Card>
  );
};

export default TechCard;
