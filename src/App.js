import logo from './logo.svg';
import nextjslogo from './next-js.svg';
import './App.css';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk'; 

function App() {
  const { logoSwitch} = useFlags()
  const { learnSwitch} = useFlags()

  console.log (learnSwitch)

  return (
    <div className="App">
      <header className="App-header">

        
        { logoSwitch ? (<img src={nextjslogo} className="App-logo" alt="logo" />) : (<img src={logo} className="App-logo" alt="logo" />) }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {learnSwitch}
        </a>
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: 'to_be_filled_in',
  reactOptions: {
    bootstrap: 'localStorage'
  }
})(App);
