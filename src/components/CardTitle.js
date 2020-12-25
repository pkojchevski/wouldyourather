import React from 'react';

const CardTitle = ({title, subtitle, children}) => {
    return (
        <div className="card">
            <div className="title center">
                <p className="title-main">{title}</p>
                <p className="title-sub">{subtitle} </p> 
             </div>
        </div>
    );
}

export default CardTitle;
