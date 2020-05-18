import React, {Component} from 'react';
import Home from './pages/Home';
import Classes from './pages/Classes';

const classSelectionOriginal = ['Add a new class in the dropdown menu!', 
'Add a new class in the dropdown menu!', 
'Add a new class in the dropdown menu!', 
'Add a new class in the dropdown menu!'];

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Home classSelection={classSelectionOriginal}/>
      </div>    
    );
  }
}

export default App;


