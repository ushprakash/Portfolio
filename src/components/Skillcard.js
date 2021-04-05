import React from 'react';

const Skillcard = ({ skill: { icon, title, about } }) =>
    <div className="col-lg-6">
        <div className="skill-card">
            <img src={icon} alt="icon" className="skill-card__icon" />
            <div className="skill-card-body">
                <h5 className="skill-card__title">{title}</h5>
                <p className="skill_card__content">{about}</p>
            </div>
        </div>
    </div>

export default Skillcard;