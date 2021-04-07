import React from 'react';
import github from '../assets/icons/github.svg'

const ProjectCard = ({ project: { name, image, deployed_url,github_url } }) => {
    return (
        <div className="projectCard col-md-6 col-lg-6">
            <figure className="projectCard__wrapper">
                <a href={deployed_url} target="_blank">
                    <img src={image} className="projectCard__image picture"/>
                </a>
                <div className="projectCard__title">
                    <a href={github_url} target="_blank">
                    <img src={github} className="projectCard__image github"/> 
                        {name}
                    </a>
                    
                </div>
            </figure>

        </div>
    );
};

export default ProjectCard;