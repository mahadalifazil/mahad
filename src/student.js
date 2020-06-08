import React from 'react';

    function Student(props) {
            return( 
                <div>
                    <h1> my name is {props.SName} </h1>
                    <h1> Student ID is {props.Sid} </h1>
                </div>
            );
        }

        export default Student;