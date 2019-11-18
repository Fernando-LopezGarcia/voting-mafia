// React stuff
import React, {Component} from 'react';
// Spicy components and design assets
import './App.css';
import Home from './components/Home/HomeScreen';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home/>
        </header>
      </div>
    );
  }
}
export default App;
