import React, {Component} from 'react';
import './UserOutput.css'

const useroutput = (props) => {
    {console.log("propsout", props)}
    return (
        <div className="Useroutput">
            <p>The username is {props.uName}</p>
            {console.log(props.uName)}
            <p>This is the second para</p>
        </div>
    )
}

export default useroutput;
