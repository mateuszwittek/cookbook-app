import logo from './assets/logo.svg';
import './styles/App.scss';

function App() {
  return (
    <div className="App bg-background">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-heading">Example title</h1>
        <p className="text-font-dark-base">
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
    </div>
  );
}

export default App;
