import '../App.scss';
import React, {Component} from 'react';
import Dropdown from '../components/Dropdown';
import ClassButton from '../components/ClassButton';
import firebase from 'firebase';
import Classes from './Classes';
//import User from './Users';

// maybe add a list of students within the list?
// TODO: need a way for users to login and then pull their name from the database
// once we get that, we can add their name to the student list for a class onClick of them adding a class
// then we also update the database as well.


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classSelection: this.props.classSelection,
      isHomeVisible: true,
      selectedValue: '',
      classList: [
        {
          id: 1,
          value: 'CSE 311',
          students: [{id: 1, name: 'Autumn'}, {id: 2, name: 'Summer'}, {id: 3, name: 'Spring'}] 
          // insert students of class here? probably need a way to update this field once a user clicks on Dropdown selection
        },
        {
          id: 2,
          value: 'CSE 312',
          students: [{id: 1, name: 'Draco'}, {id: 2, name: 'Harry'}, {id: 3, name: 'Ron'}]
        },
        {
          id: 3,
          value: 'CSE 331',
          students: [{id: 1, name: 'IceJJFish'}, {id: 2, name: 'Michael Jordan'}, {id: 3, name: 'Steve Harvey'}]
        },
        {
          id: 4,
          value: 'CSE 403',
          students: [{id: 1, name: 'CoolKid23'}, {id: 2, name: 'CSGOD'}, {id: 3, name: 'LeBron James'}]
        },
        {
          id: 5,
          value: 'CSE 441',
          students: [{id: 1, name: 'Kcee Landon'}, {id: 2, name: 'Marianne Albay'}, {id: 3, name: 'Murathan Sarayli'}]
        }
      ]
    }
    this.updateState = this.updateState.bind(this);
    this.getStudentList = this.getStudentList.bind(this);
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

  handleClick(textValue) {
    if (textValue !== 'Add a new class in the dropdown menu!') {
      this.setState({
        isHomeVisible: false,
        selectedValue: textValue // the title that appears on each "Classes" page
      });
    }
  }

  getStudentList(className) {
    let classListCopy = this.state.classList.slice();
    for (let i = 0; i < classListCopy.length; i++) {
      console.log(classListCopy[i].value);
      if (classListCopy[i].value === className) {
        console.log(classListCopy[i].students);
        return classListCopy[i].students;
      }
    }
  }

  // <User/>
  render() {
    // copy of user's current class selection
    let classSelectionState = this.state.classSelection.slice();

    // count of user's current class selection
    let count = 0;
    for(var i = 0; i < classSelectionState.length; i++){
      if (classSelectionState[i] !== 'Add a new class in the dropdown menu!') {
        count++;
      }
    }

    // copy of class list directory
    let classListCopy = this.state.classList.slice();

    // copy of student list for a selected class
    let studentListCopy = this.getStudentList(this.state.selectedValue);

    const display = this.state.isHomeVisible ? (
      <div className="homePage">
        <h1 style={{ textAlign: 'center' }}>
          Class Dashboard{' '}
        </h1>
        <Dropdown title="Add a class" update={this.updateState} items={classListCopy} multiSelect currentlySelected={classSelectionState} updatedCount={count}/>
        <ClassButton value={this.state.classSelection[0]} onClick={() => this.handleClick(this.state.classSelection[0])}/>
        <ClassButton value={this.state.classSelection[1]} onClick={() => this.handleClick(this.state.classSelection[1])}/>
        <ClassButton value={this.state.classSelection[2]} onClick={() => this.handleClick(this.state.classSelection[2])}/>
        <ClassButton value={this.state.classSelection[3]} onClick={() => this.handleClick(this.state.classSelection[3])}/>
      </div>
      ) : (
        <Classes isClassesVisible={true} classSelection={classSelectionState} currentPage={this.state.selectedValue} studentList={studentListCopy}/>
      );
      return (
        <div className="container">
            {display}
        </div>
      );
  }
}

export default Home;