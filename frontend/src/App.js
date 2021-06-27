import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './routes-nav/Navigation';
import Routes from './routes-nav/Routes';
import './App.css';
import JoblyApi from './api/api';
import UserContext from './components/users/UserContext';
import jwt from 'jsonwebtoken';
import LoadingSpinner from './components/common/loadingSpinner/LoadingSpinner';
import useLocalStorage from './hooks/useLocalStorage';

// Key name for storing token in localStorage, question, what does export do here, export to where? 
export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);

  console.log(token);

  // useEffect will be triggerred when state of token changes, get info of new user and save it in the state of currentUser
  useEffect(() => {
    // function of loadCurrentUser is used to get user info
    const loadCurrentUser = async () => {
      if (token) {
        try {
          console.log(token);
          // get user name from decoding the token
          let {username} = jwt.decode(token);
          console.log(username);
          // set token to JoblyApi.token
          JoblyApi.token = token;
          // use the username taken from token to get the user's info
          let currentUser = await JoblyApi.getCurrentUser(username);
          // set the state of currentUser as the currentuser above
          setCurrentUser(currentUser);
        } catch (error) {
          console.log("Error with loading user info", error);
          // set current info back to null
          setCurrentUser(null);  
        }
      }
      // set state of loadedInfo as true after user's info is loaded
      setInfoLoaded(true);
    }

    // keep state of infoLoaded to be false while loading the user's info, or loadCurrentUser running
    setInfoLoaded(false);
    // run loadCurrentUser function
    loadCurrentUser();
  }, [token]);

  // logout function
  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  }

  // login function
  const login = async (loginData) => {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return {success: true}
    } catch (errors) {
      console.log("Login failed", errors);
      return {success: false, errors}
    }
  }

  // sign up function
  const signup = async (signupData) => {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return {success: true};
    } catch (errors) {
      console.log("Signup failed", errors);
      return {success: false, errors}
    }
  }

  if(!infoLoaded) {
    return <LoadingSpinner/>
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{currentUser}}>
        <div className="App">
          <Navigation logout={logout}/>
          <Routes login={login} signup={signup}/>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
