import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Games/UserInput'
import UserOutput from './Games/UserOutput'
import './Mystyle.css';

class App extends Component {
  state = {
    names: [
      { name: 'Farid' }
    ]
  }

  nameChangedHandler = (event) => {
    this.setState({
      names: [
        { name: event.target.value }
      ]
    })
  }
  render() {

    //input box inline styling 
    const style = {
      display: 'block',
      margin: '0',
      width: '100%',
      font: 'inherit',
      'font-size': '20px',
      padding: '5px',
      border: 'solid 1px #dcdcdc'




    }
    return (
      <div className="App">
        <div className="game">
          {/*Output Component*/}
          <UserOutput name={this.state.names[0].name} changed={this.nameChangedHandler} />
          {/*Input Component*/}
          <UserInput style={style} changed={this.nameChangedHandler} name={this.state.names[0].name} />
        </div>
      </div>
    );
  }
}

export default App;
