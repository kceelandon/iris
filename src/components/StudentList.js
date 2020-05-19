import React from "react";
import Student from "./Student";

function StudentList(props) {
    return (
        <div>
          {props.students.map(c => <Student key={c.id} name={c.name} />)}
        </div> 
    ); 
}
  
export default StudentList;