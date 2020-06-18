import React from 'react';
import { Link } from 'gatsby';
import Banner from '../components/Banner';

const IndexPage = () => (
  <Banner>
    <h1 className="text-center font-sans font-medium text-5xl mb-2">
      Hello, I'm <span className="font-bold">Sebastian Postigo</span>
    </h1>
    <p className="text-center font-sans font-light text-xl mb-4">
      I'm a Software Engeneer based in Perú, passionate for code.
    </p>
    <Link
      to="/projects"
      className="bg-transparent text-white font-medium font-sans py-2 px-4 border border-white rounded"
    >
      See my work
    </Link>
  </Banner>
);

export default IndexPage;
