import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';


 
let App = () => {

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' Component={Landing} />
        </Routes>
      </div>
    </Router>
    // <div className='w-full'>
    //   <Landing/>
    // </div>
  )
}

export default App;
