import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';
import CompanyList from '../components/companies/CompanyList';
import CompanyDetail from '../components/companies/CompanyDetail';
import LoginForm from '../components/users/LoginForm';
import SignupForm from '../components/users/SignupForm';
import ProfileForm from '../components/users/ProfileForm';
import JobList from '../components/jobs/JobList';


const Routes = ({login, signup}) => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route exact path="/companies">
                    <CompanyList/>
                </Route>
                <Route exact path="/companies/:handle">
                    <CompanyDetail/>
                </Route>         
                <Route exact path="/signup">
                    <SignupForm signup={signup}/>
                </Route>    
                <Route exact path="/login">
                    <LoginForm login={login}/>
                </Route>    
                <Route exact path="/profile">
                    <ProfileForm/>
                </Route>   
                <Route exact path="/jobs">
                    <JobList/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </div>
    )
}

export default Routes;