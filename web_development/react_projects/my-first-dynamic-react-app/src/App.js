import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {
  state = {
    persons: [ 
      {name : "Farid", age: 22},
      {name : "Goku", age:"infinite"},
      {name : "Tanaya", age:19}
    ]
  }

  switchNameHandler = () => {
    // Don't do this: this.state.person[0].name = "Farid Ansari";
    this.setState({
      persons: [ 
        {name : "Farid Ansari", age: 22},
        {name : "Goku", age:"still infinite"},
        {name : "Tanaya", age:20}
      ]
    })
  }
  render() {
    
    return (
     <div className = 'App'>
       <br/>
       <br/>
       <button className = 'btn' onClick={this.switchNameHandler}>Submit</button>
    
       <h1>Hellooooooooooooo </h1>
      < Person name={this.state.persons[0].name} age={this.state.persons[0].age} > and I like playing playing Basketball </Person>
      < Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
     
     </div>
    );
  }
  
}



export default App;
