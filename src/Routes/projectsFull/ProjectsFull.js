import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import contentText from '../../contentText';

const projectsData = contentText.projects;

function ProjectsFull() {
  const [data, setData] = useState({
    projectName: 'Error, Project not found',
  });

  const { name } = useParams();

  useEffect(() => {
    // Fetch correct project Data and add it to "data" State
    for (let index = 0; index < projectsData.length; index++) {
      const project = projectsData[index];

      if (project.projectLinkName === name) {
        setData(project);
      }
    }
  }, []);

  return (
    <main className="projects">
      <h1>
        {data.projectName}
      </h1>
    </main>
  );
}

export default ProjectsFull;
