import React from 'react';
import frontend from '../images/frontend-1.svg';
import backend from '../images/backend.svg';

const Columns = () => {
  return (
    <div className="columns mx-32">
      <div className="columns__column">
        <img src={frontend} alt="frontend icon" className="w-20 mx-auto mb-4" />

        <h3 className="font-medium text-center text-2xl mb-8">Frontend</h3>

        <ul className="text-center">
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Sass</li>
          <li>React</li>
          <li>Vue</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Gatsby</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="columns__column">
        <img src={backend} alt="frontend icon" className="w-20 mx-auto mb-4" />

        <h3 className="font-medium text-center text-2xl mb-8">Backend</h3>

        <ul className="text-center">
          <li>PHP</li>
          <li>Laravel</li>
          <li>Codeigniter</li>
          <li>Docker</li>
          <li>Node</li>
          <li>Adonis.js</li>
          <li>Express</li>
          <li>Nest.js</li>
          <li>Amazon Web Services</li>
          <li>Heroku</li>
        </ul>
      </div>
    </div>
  );
};

export default Columns;
