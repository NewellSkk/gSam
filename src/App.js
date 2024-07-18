import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';


 
let App = () => {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' Component={Landing} />
        </Routes>
      </Router>
    </div>
  
  )
}

export default App;
