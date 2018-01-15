import React, {Component} from 'react';
import './UserInput.css';

const userinput = (props) => {
    {console.log("propsin", props)}
    return (
        <div>
        <input className="Userinput" type="text" onChange={props.change}/>
        </div>
    )
}

export default userinput;