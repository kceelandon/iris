import React, {Component} from 'react';
import Home from './pages/Home';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { ReactComponent as Logo } from './components/logo.svg';
import './index.css';

const classSelectionOriginal = ['Add a new class in the dropdown menu!', 
'Add a new class in the dropdown menu!', 
'Add a new class in the dropdown menu!', 
'Add a new class in the dropdown menu!'];

class App extends Component {
  state = {
    isSignedIn: false
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className='App'>
        {this.state.isSignedIn ? (
          <span>
            <Home classSelection={classSelectionOriginal}/>
          </span>
        ) : (
          <div>
            <Logo/>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>    
    );
  }
}

export default App;


