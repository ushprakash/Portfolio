import React, { useState } from 'react';
import projectsdata from './data/projectsdata'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState(projectsdata)

    const handleFilterCategory = (name) => {
        const new_array = projectsdata.filter(project => project.category.includes(name))
        setProjects(new_array)
    }
    return (
        <div className="container projects">
            <div className="projects__navbar">
                <div onClick={() => setProjects(projectsdata)}>All</div>
                <div onClick={() => handleFilterCategory('React')}>React</div>
                <div onClick={() => handleFilterCategory('JavaScript')}>JavaScript</div>
                <div onClick={() => handleFilterCategory('JQuery')}>JQuery</div>
                
            </div>
            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;