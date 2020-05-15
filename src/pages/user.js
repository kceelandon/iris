import React, {Component} from 'react';
import firestore from '../services/firestore';
import firebase from 'firebase'

// need to update with google auth stuff later
class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       email: '',
       fullname: ''
      };
    }
  
    updateInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    addUser = e => {
        // add random userID with user
        let min = Math.ceil(1000);
        let max = Math.floor(10000);
        let id = this.state.fullname + '#' + ((Math.floor(Math.random() * (max - min)) + min)); // generate random user ID
        // probably will change this once we have regular google sign in

        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("users").add({
            fullname: this.state.fullname,
            email: this.state.email,
            userID: id
        });
        this.setState({
            fullname: '',
            email: ''
        });
    };
  
    render() {
      return (
          <form onSubmit={this.addUser}>
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              onChange={this.updateInput}
              value={this.state.fullname}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.updateInput}
              value={this.state.email}
            />
            <button type="submit">Submit</button>
          </form>
      );
    }
  }
  
  export default User;