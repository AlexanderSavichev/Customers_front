import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/userlist" exact={true} element={<UserList/>}/>
      </Routes>
    </Router>
  )
}

export default App;