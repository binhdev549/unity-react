import logo from "./logo.svg";
import "./App.css";
import UnityCanvas from "./Unity";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      <div style={{ height: 960, width: 640 }}>
        <UnityCanvas />
      </div>
    </div>
  );
}

export default App;
