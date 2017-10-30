import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
 state = {
   names : [
     { name : "" }
   ]
 }
 lengthtellerHandler = (event) => {
  this.setState({
    names: [
      { name: event.target.value }
    ]
  })
}

deleteCharHandler = (index) => {
  const text = this.state.names[0].name.split('');
  text.splice(index,1);
  const newText = text.join('');
  this.setState({
    names : [
      { name : newText }
    ]
  });
}
  render() {

    let heading = null;
    if(this.state.names[0].name.length > 0 ){
         heading = (
            <h1 >Click On Box to Delete</h1>
        )
    }
    else{
      heading = (
        <h1 >Enter something in the Input Box above</h1>
    )
    }

    const charList = this.state.names[0].name.split('').map((ch, index) => {
      return <CharComponent
      character = {ch}
      key = {index}
      clicked = {() => this.deleteCharHandler(index)}
      />
    })
    return (
      <div className="App">
        <div className="box">
        <input type="text" onChange= { this.lengthtellerHandler} value= {this.state.names[0].name} />
        <p>{this.state.names[0].name.length}</p>
       <ValidationComponent len = {this.state.names[0].name.length}/>
       </div>
       <br/>
       <div className="box2">
        {heading} 
       {charList}
       </div>
       
      </div>
    );
  }
}

export default App;
