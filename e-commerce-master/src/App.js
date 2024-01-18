import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/components/pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
      <Homepage />
      </div>
    </div>
  );
}

export default App;
