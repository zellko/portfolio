import React from 'react';
import PjtCard from '../../Components/PjtCard/PjtCard';
import './Projects.css';
import contentText from '../../contentText';

const projectsData = contentText.projects;

function Projects() {
  return (
    <main className="projects">
      <h1>
        Selected Projects:
      </h1>
      {projectsData.map((pjt) => (
        <PjtCard data={pjt} key={pjt.projectLinkName} />
      ))}
    </main>
  );
}

export default Projects;
