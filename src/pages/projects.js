import React from 'react';
import TechLabel from '../components/TechLabel';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-medium text-center text-blue-900 my-10">
        Projects
      </h1>

      <div>
        <img
          src="https://via.placeholder.com/500x300"
          alt="project"
          className="mb-4"
        />
        <h2 className="text-3xl font-medium text-center text-blue-900 mb-4">
          Project X
        </h2>
        <div className="mb-4 flex justify-between px-2">
          <TechLabel tech="Laravel" color="#ff2d20" />
          <TechLabel tech="Javascript" color="#f1e05a" />
          <TechLabel tech="Bootstrap" color="#7952b3" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
