import React from "react";
import Button from '@material-ui/core/Button';
import firebase from 'firebase';

export const ClassList = ({ classes }) => {

  return (
    <div>
      <h1>Classes</h1>
      {classes.map((classTitle, i) => (
        <div key={i}>
          <ul>
            {classTitle.name}<Button>Add</Button>
          </ul>
        </div>
      ))}
    </div>
  );
};