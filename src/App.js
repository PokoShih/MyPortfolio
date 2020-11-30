import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from './components/Resume';
import HeaderNav from './components/headerNav';

export default function App() {
  return (
    <div className="App">
      <Router> 
      <Switch>
            <Route path="/#resume">
              <Resume />
            </Route>
            {/* <Route path="/#contact">
                            <Contact />
                        </Route> */}
            <Route path="/#projects">
              {/* <Projects /> */}
            </Route>
          </Switch>
      </Router>
        <HeaderNav className="App-header" />
          
    </div>
  );
}