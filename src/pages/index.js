import React from 'react';

const IndexPage = () => (
  <div className="stars-backgound">
    <div className="stars" />
    <div className="stars-2" />
    <div className="stars-3" />
    <div className="flex flex-col h-full items-center justify-center text-white px-4">
      <h1 className="text-center font-sans font-medium">
        Hello, I'm <span className="font-bold">Sebastian Postigo</span>
      </h1>
      <p className="text-center font-sans font-light">
        I'm a Software Engeneer based in Perú, passionate for code.
      </p>
      <button className="bg-transparent text-white font-medium font-sans py-2 px-4 border border-white rounded">
        See my work
      </button>
    </div>
  </div>
);

export default IndexPage;
