import React, {useState} from 'react';
import JoblyApi from '../../api/api';
import SearchForm from '../common/SearchForm';
import CompanyCard from './CompanyCard';

const CompanyList = () => {
    const [companies, setCompanies] = useState(null);

    // const search

    const searchByCompany = async name => {
        console.log("hi");
        // get all the companies based on the search
        const companies = await JoblyApi.getCompanyBySearching(name);
        console.log(companies);
    }

    return (
        <div>
            <SearchForm search={searchByCompany}/>
            <h1>Companies</h1>
        </div>
    )
}

export default CompanyList;