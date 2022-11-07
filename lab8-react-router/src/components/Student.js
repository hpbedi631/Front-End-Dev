import React from "react";

const Student = ({match}) => {
    const {studentname,studentno} = match.params;
    return ( 
        <div>
            <p>Student</p>
            <div>
                <div>
                    {`The student name is "${studentname}"!`}
                </div>
                <div>
                    {`Student no is "${studentno}"!`}
                </div>
            </div>
        </div> );
}
 
export default Student;