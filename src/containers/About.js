import React from 'react';
import Columns from '../components/ui/Columns';
import Column from '../components/ui/Column';
import ProfileCard from '../components/ProfileCard';

const About = () => {
  return (
    <section className="section bg-gray-100">
      <div className="container mx-auto">
        <Columns>
          <Column side="left">
            <ProfileCard />
          </Column>
          <Column side="right"></Column>
        </Columns>
      </div>
    </section>
  );
};

export default About;
