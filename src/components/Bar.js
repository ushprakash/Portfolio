import React from 'react';
const Bar = ({value: { name } }) => {
    
    return (
        <div className="bar">
                <span className="bar__name">
                    {name}
                </span>
            </div>

        
    );
};

export default Bar;