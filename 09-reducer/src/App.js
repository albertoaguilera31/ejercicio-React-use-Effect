import logo from './logo.svg';
import './App.css';
import { Misjuegos } from './components/Misjuegos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Misjuegos/>
      </header>
    </div>
  );
}

export default App;
