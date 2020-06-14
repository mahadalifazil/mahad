import React from 'react';

    function Student(props) {
            return( 
                <div>
                    <h3> my name is {props.SName} </h3>
                    <h3> Student ID is {props.Sid} </h3>
                    <h3> belongs to {props.UniName} university </h3>
                    <hr/>
                    
                </div>
            );
        }

        export default Student;