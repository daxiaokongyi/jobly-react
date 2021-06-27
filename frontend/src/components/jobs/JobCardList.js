import React from 'react';
import JobCard from './JobCard';

const JobCardList = ({jobs}) => {
    console.log(jobs);

    return (
        <div className="JobCardList">
            {jobs.map((job, index) => (
                <JobCard 
                    companyhandle={job.companyhandle}
                    companyName={job.companyName}
                    equity={job.equity}
                    id={job.id}
                    salary={job.salary}
                    title={job.title}
                    key={index}
                />
            ))}
        </div>
    )
}

export default JobCardList;