import React, {Component} from 'react';
import Home from './pages/Home';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { ReactComponent as Logo } from './components/logo.svg';
import './index.css';
import Profile from './pages/Profile';

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
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  render() {
    return (
      <div className='App'>
        {this.state.isSignedIn ? (
          <div id="wrapper" class="float-container">
            <div id="Profile" class="profile">
              <Profile/>
            </div>
            <div id="Home" class="home">
              <Home/>
            </div>
          </div>
        ) : (
          <div>
            <Logo/>
            <h1>Connecting the world through color</h1>
            <br></br>
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


