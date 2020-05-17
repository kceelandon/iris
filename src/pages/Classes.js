import React, {Component} from 'react';
import firestore from '../services/firestore';
import firebase from 'firebase'
import Home from './Home';

// page for viewing a class and it's studentList

// TODO: Implement a way to get back to Home.js (see Home.js for navigation example)
// TODO: List people who are online and allow people to invite them
// Maybe make a container (component) for storing each student entry called StudentHolder.js maybe?
// Have that class render the student name and the Invite Modal
// We will then have a component that will render a list of those StudentHolders and have
// that component stored and rendered here in the Classes page component.

class Classes extends React.Component {
    render() {
        return (
          <div className="Classes">
            Hello from Class Page
          </div>    
        );
    }

}

export default Classes;