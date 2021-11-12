import { Route, Router } from 'react-router-dom';
import React  from 'react';
import './App.css';
// eslint-disable-next-line
import home from './pages/home'; 
// import main from './pages/main';

function App() {
  return (
    <Router>
          <Route path="/">
            <home />
          </Route>
          {/* <Route path="/main" exact component={main}></Route> */}
      
    </Router>

  );
};

export default App;