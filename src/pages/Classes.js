import React, {Component} from 'react';
import firestore from '../services/firestore';
import firebase from 'firebase'
import Home from './Home';
import { ReactComponent as Logo } from '../components/logo.svg';

// page for viewing a class and it's studentList

// TODO: List people who are online and allow people to invite them
// Maybe make a container (component) for storing each student entry called StudentHolder.js maybe?
// Have that class render the student name and the Invite Modal
// We will then have a component that will render a list of those StudentHolders and have
// that component stored and rendered here in the Classes page component.

// TODO: make a way to display different class list depending on the class

// example students

class Classes extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
      classSelection: this.props.classSelection,
      isClassesVisible: true,
      students: this.props.studentList,
      currentPage: this.props.currentPage // could use this state to determine the class list
    }
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({
        isClassesVisible: false
      });
    }

    render() {
      console.log(this.state.classSelection);
      let classSelectionState = this.state.classSelection.slice();
      let pageTitle = this.state.currentPage;
      const display = this.state.isClassesVisible ? (
        <div className="classPage">
            <Logo />
            <h1 style={{ textAlign: 'center' }}>
                {pageTitle}
            </h1>
        </div>
      ) : (
        <Home isHomeVisible={true} classSelection={classSelectionState}/>
      );
        return (
          <div className="Classes">
            {display}
          </div>    
        );
    }

}

export default Classes;