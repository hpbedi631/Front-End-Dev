import React from "react";
import Courses from "./courses";
 
const Student = (props) => {
 const courses = [];
 for(let i = 0; i < props.enrolled; i++) {
   courses.push(<p><Courses /> {i}</p>);
 }
  return <> <p>Student <b>{props.name}</b> with student number <b>{props.number}</b></p>
  <p>Student is enrolled in <b>{courses}</b> </p></>;
 }
 
export default Student;