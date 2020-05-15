import './App.scss';
import React, {Component} from 'react';
import User from './pages/user';
import Dropdown from './components/Dropdown'

const classList = [
  {
    id: 1,
    value: 'CSE 403'
  },
  {
    id: 2,
    value: 'CSE 441'
  }
];

class App extends Component {
  render() {
    return (
      <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Pick Classes{' '}
      </h1>
      <Dropdown title="Add a class" items={classList} multiSelect />
    </div>
    );
  }
}

export default App;


