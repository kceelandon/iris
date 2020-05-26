import React, {Component} from 'react';
import firebase from 'firebase';
import './Profile.css';
import { ReactComponent as Statuskey } from '../components/statuskey.svg';

class Profile extends Component { 

    render() {
        var user = firebase.auth().currentUser;
        var profilePictureURL = '';
        var profileName = '';
        var profileEmail = '';
        if (user != null) {
            user.providerData.forEach(function (profile) {
                profilePictureURL = profile.photoURL;
                profileName = profile.displayName;
                profileEmail = profile.email;
            });
        }
        return (
            <div>
                <img src={profilePictureURL} alt="profile picture" height='100' width='100'/>
                <h3>{profileName}</h3>
                <p>{profileEmail}</p>
                <span>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                </span>
                <Statuskey/>
            </div>

        );
    }

}

export default Profile;