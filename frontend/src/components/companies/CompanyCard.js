import React from 'react';

const CompanyCard = ({name, description, logoUrl, handle}) => {
    return (
        <div>
            <h6>
                {name}
                {logoUrl && <img src={logoUrl}
                                 alt={name}
                />}
            </h6>
            <p><small>{description}</small></p>
        </div>
    )
}

export default CompanyCard;