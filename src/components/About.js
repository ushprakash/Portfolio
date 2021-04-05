import React from 'react';
import git from '../assets/icons/git.svg'
import computer from '../assets/icons/computer.svg'
import puzzle from '../assets/icons/puzzle.svg'
import database from '../assets/icons/database.svg';
import Skillcard from './Skillcard';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS ,Bootstarp and React.js"
    },
    {
        icon: database,
        title: "Backend  Development",
        about: "I can handle MySql and Node.js ",
    },
    
    {
        icon: git,
        title: "Version control",
        about: "I can manage version control on documents",
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using figma and  framer"
    }
]


const About = () => {
    return (
        <div className="about">
            <p className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </p>
            <div className="container about__container">
                <p className="about__heading">What I offer</p>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;