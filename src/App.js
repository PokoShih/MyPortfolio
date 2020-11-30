import React from 'react';
import './App.css';
// import { BrowserRouter as Router} from "react-router-dom";
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";
import HeaderNav from './components/headerNav';

export default function App() {
  return (
      <div className="App">
        <HeaderNav className="App-header"/>
      </div>
  );
}