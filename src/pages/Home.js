import '../App.scss';
import React, {Component} from 'react';
import Dropdown from '../components/Dropdown';
import ClassButton from '../components/ClassButton';
import firebase from 'firebase';

const classList = [
  {
    id: 1,
    value: 'CSE 403'
  },
  {
    id: 2,
    value: 'CSE 441'
  },
  {
    id: 3,
    value: 'CSE 311'
  },
  {
    id: 4,
    value: 'CSE 312'
  },
  {
    id: 5,
    value: 'CSE 331'
  },
  {
    id: 6,
    value: 'CSE 142'
  },
  {
    id: 7,
    value: 'CSE 143'
  },
  {
    id: 8,
    value: 'CSE 154'
  },
  {
    id: 9,
    value: 'CSE 351'
  },
  {
    id: 10,
    value: 'CSE 332'
  }
];



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classSelection: ['Add a new class in the dropdown menu!', 
            'Add a new class in the dropdown menu!', 
            'Add a new class in the dropdown menu!', 
            'Add a new class in the dropdown menu!']
        }
        this.updateState = this.updateState.bind(this);
    }

    // should check classSelection and see if newSelection exists
    // if true, removes that selection in the array and replaces it with original message
    // if it is a new selection, adds that selection to first open space
    // update database here.
    updateState(newSelection) {
        let original = 'Add a new class in the dropdown menu!';
        let classSelectionCopy = this.state.classSelection.slice();
        if (!classSelectionCopy.includes(newSelection)) { // add to first open space
            for (let i = 0; i < classSelectionCopy.length; i++) {
                if (classSelectionCopy[i] === original) {
                    classSelectionCopy[i] = newSelection;
                    this.setState({classSelection: classSelectionCopy});
                    break;
                }
            }
        } else { // removal and replace
            for (let i = 0; i < classSelectionCopy.length; i++) {
                if (classSelectionCopy[i] === newSelection) {
                    classSelectionCopy[i] = original;
                    this.setState({classSelection: classSelectionCopy});
                    break;
                }
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>
                    Class Dashboard{' '}
                </h1>
                <Dropdown title="Add a class" update={this.updateState} items={classList} multiSelect />
                <ClassButton value={this.state.classSelection[0]}/>
                <ClassButton value={this.state.classSelection[1]}/>
                <ClassButton value={this.state.classSelection[2]}/>
                <ClassButton value={this.state.classSelection[3]}/>
            </div>
        );
    }
}

export default Home;