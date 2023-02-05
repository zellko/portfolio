import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import contentText from '../../contentText';
import './ProjectsFull.css';

const projectsData = contentText.projects;

function ProjectsFull() {
  const [data, setData] = useState({
    projectName: 'Error, Project not found',
    projectText: '',
    projectTech: '',
    projectImgLink: [''],
    projectTechImgLink: [['', 'alt']],
    projectLinkName: 'nan',
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
    <main className="projects-full">
      <div className="card-text-container">
        <h1>{data.projectName}</h1>
        <h2>{data.projectText}</h2>
      </div>

      <div className="card-img-container">
        <img src={data.projectImgLink} alt={data.projectImgLink[1]} />
        <div className="card-skill-container">
          {data.projectTechImgLink.map((logoData) => (
            <img src={logoData[0]} alt={logoData[1]} key={logoData[1]} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectsFull;
