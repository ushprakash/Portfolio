import React from 'react';
//import Bar from './Bar';

const languages = [
    
    {        
        name: 'HTML5'
    },
    {        
        name: 'CSS3'
    },    
    {        
        name: 'JavaScript'
    },
    {        
        name: 'React'
    },
    {        
        name: 'Bootstrap'
    }
]

const languages1 = [
    {        
        name: 'JQuery'
    },
    {        
        name: 'NodeJS'
    },
    {        
        name: 'MySql'
    },
    {        
        name: 'Git'
    }

    
]

const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-5 resume-card mx-10" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Electrical & Electronics Engineering
                        </h5>
                        <p className="resume-card__name">
                            Anna University(2005-2009),India
                        </p>
                        <p className="resume-card__details">
                            I am B.E(Bachelor of Engineering) degree holder from Anna University in India
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        
                        <p className="resume-card__title">
                            Freelancing Projects <br/>
                            (FrontEnd Developer)
                        </p>
                        <p className="resume-card__details">I work as part-time job in Freelancing projects </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="resume-language">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body">
                        <div className="lng col-xs-6">
                            {
                            languages.map(language =>
                            (<div>{language.name}</div>)
                            )
                        }
                        </div>
                        <div className="lng1 col-xs-6">
                            {
                            languages1.map(language1 =>(<div>
                                    {language1.name}
                            </div>)
                            
                            )
                        }
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Resume;
