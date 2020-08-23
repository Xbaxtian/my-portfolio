import React from 'react';
import Banner from '../components/Banner';

const Hero = () => {
  return (
    <Banner>
      <h1 className="text-center font-sans font-medium text-5xl mb-4 leading-none">
        Hello, I'm <span className="font-bold">Sebastian Postigo</span>
      </h1>
      <p className="text-center font-sans font-light text-xl mb-4">
        I'm a Software Engineer based in Perú, passionate for code.
      </p>
    </Banner>
  );
};

export default Hero;
