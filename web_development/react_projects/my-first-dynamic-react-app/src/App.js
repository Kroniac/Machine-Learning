import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {
  render() {
    
    return (
     <div className = 'App'>
       <h1>Hellooooooooooooo </h1>
      < Person name="Farid" age="22" > and I like playing playing Basketball </Person>
      < Person name="Goku" age="infinite" />
      <Person name="Tanaya" age="19" />
     
     </div>
    );
  }
  
}



export default App;
