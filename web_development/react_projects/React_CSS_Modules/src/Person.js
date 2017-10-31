import React from 'react'
import cass from './person.css';
const person = (props) => {
    
    return (
        <div className={cass.person} >
        
        <p onClick={props.click}>My Name Is {props.name} and i'm {props.age} years old!!</p>
        <p> {props.children} </p>
        <input type="text" onChange = {props.changed} value = {props.name}/>
      </div>
    )
};


export default person;