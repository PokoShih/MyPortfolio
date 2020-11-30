import React from 'react';
import './App.css';
import backImage from './assets/create.jpg';
import headerNav from './components/headerNav.js';
import { BrowserRouter as Router} from "react-router-dom";
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  return (
      <div className="App"
      style={{
      background: `url(${backImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:0.5
    }}
    >
        <headerNav className="App-header"/>
      <div className="App-content">
        what's up
      </div>
    </div>
  );
}

export default App;
