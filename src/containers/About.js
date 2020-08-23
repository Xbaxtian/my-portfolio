import React from 'react';
import Columns from '../components/ui/Columns';
import Column from '../components/ui/Column';
import ProfileCard from '../components/ProfileCard';
import TechCard from '../components/TechCard';

const frontList = [
  { label: 'JavaScript', percentage: 90 },
  { label: 'TypeScript', percentage: 60 },
  { label: 'Sass', percentage: 90 },
  { label: 'React', percentage: 80 },
  { label: 'Vue', percentage: 70 },
  { label: 'Bootstrap', percentage: 90 },
  { label: 'Bulma', percentage: 80 },
  { label: 'Gatsby', percentage: 90 },
  { label: 'Tailwind', percentage: 70 },
];

const backList = [
  { label: 'PHP', percentage: 90 },
  { label: 'Node', percentage: 80 },
  { label: 'Laravel', percentage: 90 },
  { label: 'Codeigniter', percentage: 90 },
  { label: 'Docker', percentage: 70 },
  { label: 'Adonis.js', percentage: 90 },
  { label: 'Express', percentage: 80 },
  { label: 'AWS', percentage: 60 },
  { label: 'Heroku', percentage: 60 },
];

const About = () => {
  return (
    <section className="section bg-gray-100">
      <div className="container mx-auto">
        <Columns>
          <Column side="left">
            <ProfileCard />
          </Column>
          <Column side="right">
            <Columns>
              <Column side="half">
                <TechCard title="FRONT END" list={frontList} />
              </Column>
              <Column side="half">
                <TechCard title="BACK END" list={backList} />
              </Column>
            </Columns>
          </Column>
        </Columns>
      </div>
    </section>
  );
};

export default About;
