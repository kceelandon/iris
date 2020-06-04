import React, {Component} from "react";
import firebase from 'firebase';


const db = firebase.firestore();

  /*
  let acquireData = db.collection('users').doc(currentUser).get()
    .then(doc => {
      if (!doc.exists) {
        console.log('doc does not exist');
      } else {
        let data = doc.data();
        let temp = data.classes.slice();
        console.log(temp);
        if (!temp.includes(className) && temp.length < 4) {
          temp.push(className);
          console.log(temp);
          db.collection('users').doc(currentUser).update({classes: temp});
        }     
      }
    })
    .catch(err => {
      console.log('unable to retrieve document', err);
    });
  */

class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: this.props.classes,
      userClasses: this.props.userClasses
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let currentUser = firebase.auth().currentUser.uid;
    let classesRef = db.collection('classes');
    let query = classesRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let userIdList = doc.data().users.slice();
          if (!userIdList.includes(currentUser) && this.state.userClasses.includes(doc.id)) {
            userIdList.push(currentUser);
            db.collection('classes').doc(doc.id).update({users: userIdList});
          }
        });
      })
      .catch(err => {
        console.log('error getting docs', err);
      });
  }

  handleClick(className) {
    let currentUser = firebase.auth().currentUser.uid;
    let userClassListCopy = this.state.userClasses.slice();
    if (!userClassListCopy.includes(className) && userClassListCopy.length < 4) {
      userClassListCopy.push({name: className, status: 'offline'});
      console.log('initialized offline');
      this.setState({userClasses: userClassListCopy});
      db.collection('users').doc(currentUser).update({classes: userClassListCopy});
    }
  }

  render() {
    let classCopy = this.state.classes.slice();
    return (
      <div>
        <h1>Classes</h1>
        {classCopy.map((classTitle, i) => (
          <div key={i}>
            <ul>
              {classTitle.name}<button onClick={this.handleClick.bind(this, classTitle.name)}>Add</button>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default ClassList;