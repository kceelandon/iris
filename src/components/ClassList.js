import React from "react";

export const ClassList = ({ classes }) => {

  return (
    <div>
      <h1>Classes</h1>
      {classes.map((classTitle, i) => (
        <div key={i}>
          <li>
            <button>{classTitle.name}</button>
          </li>
        </div>
      ))}
    </div>
  );
};