import React from 'react';
import Card from './ui/Card';
import Progress from './Progress';

const TechCard = ({ area }) => {
  return (
    <Card className="w-full">
      <h2 className="title">FRONT END</h2>
      <Progress item={{ label: 'React', percentage: 70 }} />
    </Card>
  );
};

export default TechCard;
