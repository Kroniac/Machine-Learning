import React from 'react'
import './person.css';
const person = (props) => {
    return (
        <div className="person">
        
        <p>My Name Is {props.name} and i'm {props.age} years old!!</p>
        <p> {props.children} </p>
      </div>
    )
};


export default person;