import React from 'react';
import { Link } from 'react-router-dom';
import './PjtCard.css';

function PjtCard({ data }) {
  return (
    <article className="pjtCard">
      <div className="card-text-container">
        <h1>{data.projectName}</h1>
        <h2>{data.projectTech}</h2>
      </div>
      <Link to={`/projects/${data.projectLinkName}`} href={`/projects/${data.projectLinkName}`}>
        <div className="card-img-container">
          <img src={data.projectImgLink} alt={data.projectImgLink[1]} />
          <div className="card-skill-container">
            {data.projectTechImgLink.map((logoData) => (
              <img src={logoData[0]} alt={logoData[1]} key={logoData[1]} />
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PjtCard;
