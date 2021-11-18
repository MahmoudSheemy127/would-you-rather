 import React from 'react'
import LoginPage from "./components/LoginPage";
import LoadingBar  from "react-redux-loading-bar";
import PollList from "./components/PollList";
import AnswerPoll from "./components/AnswerPoll"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {handleGetUsers} from './actions/users';
import {handleGetPolls} from './actions/polls'
import { Fragment } from 'react';
import QuestionPoll from './components/QuestionPoll'
import LeaderBoard from './components/LeaderBoard';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Error from './components/404';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {

  //loading flag
  const loading = useSelector((state) => state.loadingBar.default)
  //dispatch
  const dispatch = useDispatch()
  //fetch all data when app mounts
  useEffect(() => {
    dispatch(handleGetUsers())
    dispatch(handleGetPolls())
  },[])
  
  return (
<Router>
<Fragment>
    <LoadingBar />
      {loading === 0 ?
       <>
       <Navbar></Navbar>        
              <Route exact path="/" >
                <LoginPage />
              </Route>
              <PrivateRoute component={PollList} exact path="/home">
              </PrivateRoute>
              
              <PrivateRoute component={AnswerPoll} exact path="/answer/:id"></PrivateRoute>
              <PrivateRoute component={QuestionPoll} exact path="/question"></PrivateRoute>
              <PrivateRoute component={LeaderBoard} exact path="/leaderboard"></PrivateRoute>
              <PrivateRoute component={Error}   path="*"></PrivateRoute>
       </>       
       : null }
    </Fragment>
</Router>
  );
}

export default App;
