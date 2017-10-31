import React from 'react'
import './person.css';
const person = (props) => {
    const style = {
       
    }
    return (
        <div className="person" style={style}>
        
        <p onClick={props.click}>My Name Is {props.name} and i'm {props.age} years old!!</p>
        <p> {props.children} </p>
        <input type="text" onChange = {props.changed} value = {props.name}/>
      </div>
    )
};


export default person;