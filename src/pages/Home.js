import '../App.scss';
import React, {Component, useState} from 'react';
import firebase from 'firebase';
import Classes from './Classes';
import { ReactComponent as Logo } from '../components/logo.svg';
import SimpleModal from '../components/SimpleModal';
//import User from './Users';

// maybe add a list of students within the list?
// TODO: need a way for users to login and then pull their name from the database
// once we get that, we can add their name to the student list for a class onClick of them adding a class
// then we also update the database as well.


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomeVisible: true
    }
  }

  // <User/>
  render() {   
    const display = this.state.isHomeVisible ? (
      <div className="homePage">
        <div class="classes-header">
          {/* <button class="class-button"></button> */}
          <SimpleModal/>
        </div>
      </div>
      ) : (
       <div>Hello</div>
      );
    return (
      <div className="container">
          {display}
      </div>
    );
  }
}

export default Home;