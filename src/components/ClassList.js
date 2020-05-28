import React from "react";
import Button from '@material-ui/core/Button';
import firebase from 'firebase';

const db = firebase.firestore();

function handleClick(className) { // get classes list from db and if classTitle is not in current list, add it

}

export const ClassList = ({ classes }) => {

  return (
    <div>
      <h1>Classes</h1>
      {classes.map((classTitle, i) => (
        <div key={i}>
          <ul>
            {classTitle.name}<Button onClick={handleClick(classTitle.name)}>Add</Button>
          </ul>
        </div>
      ))}
    </div>
  );
};