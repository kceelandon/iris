import React, { Component } from "react";
import "./Student.css";
import SimpleModal from './SimpleModal';
import PropTypes from "prop-types";

function Student(props) {
    return (
    <div className="student">
      <span>{props.name}</span>
      <SimpleModal/>
    </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired
};
   
export default Student;