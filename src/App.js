import React from 'react';
import './App.css';
import backImage from './assets/create.jpg';
// import { BrowserRouter as Router} from "react-router-dom";
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";
import HeaderNav from './components/headerNav';

export default function App() {
  return (
      <div className="App"
      style={{
      background: `url(${backImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    >
        <HeaderNav className="App-header"/>
        <div className="App-content">
          what's up
        </div>
      </div>
  );
}