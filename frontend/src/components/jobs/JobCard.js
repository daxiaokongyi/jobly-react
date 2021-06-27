import React from 'react';
import './JobCard.css';

const JobCard = ({companyHandle, companyName, equity, id, salary, title}) => {
    return (
        <div className="JobCard card">
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p>{companyName}</p>
                <div>
                    <small> Salary: 
                        {salary
                            ? ` ${salary}`
                            : " N/A"
                        }
                    </small>
                </div>
                <div>
                    <small>Equity: 
                        {equity
                            ? ` ${equity}`
                            : " N/A"
                        }
                    </small>
                </div>
            </div>
        </div>
    )
}

export default JobCard;