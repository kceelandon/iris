import React, {Component} from 'react';
import firebase from 'firebase';
import './Profile.css';
import { ReactComponent as Statuskey } from '../components/statuskey.svg';

const db = firebase.firestore();

var user = firebase.auth().currentUser;


class Profile extends Component {
    constructor(props) {
        super(props);
        let currentUserID = firebase.auth().currentUser.uid;
        let user = firebase.auth().currentUser;
        let profilePictureURL = '';
        let profileName = '';
        let profileEmail = '';
        // getting updated profile data from google and adding it to database
        if (user != null) {
            user.providerData.forEach(function (profile) {
                profilePictureURL = profile.photoURL;
                profileName = profile.displayName;
                profileEmail = profile.email;
            });
        }
        let data = {
            name: profileName,
            photoURL: profilePictureURL,
            email: profileEmail
        };
        db.collection('users').doc(currentUserID).set(data);

        // getting data from database
        let userRef = db.collection('users').doc(currentUserID);
        let getData = userRef.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('doc does not exist');
                } else {
                    let dbData = doc.data();
                    profilePictureURL = dbData.photoURL;
                    profileName = dbData.name;
                    profileEmail = dbData.email;
                    if (typeof dbData.classes === 'undefined') {
                        db.collection('users').doc(currentUserID).update({classes: []});
                    }
                }
            })
            .catch(err => {
                console.log('unable to retrieve document', err);
            });
        this.state = {
            displayName: profileName,
            displayEmail: profileEmail,
            displayPictureURL: profilePictureURL
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.displayPictureURL} alt="user profile" height='100' width='100'/>
                <h3>{this.state.displayName}</h3>
                <p>{this.state.displayEmail}</p>
                <span>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                </span>
                <div className='statuskey'>
                    <Statuskey/>
                </div>
            </div>

        );
    }

}

export default Profile;