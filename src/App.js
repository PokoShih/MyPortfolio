import logo from './logo.svg';
import './App.css';
import backImage from './assets/create.jpg';

function App() {
  return (
    <div className="App"
    style={{
      background: `url(${backImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-content">
        what's up
      </div>
    </div>
  );
}

export default App;
