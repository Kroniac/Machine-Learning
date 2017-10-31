import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Person from './Person';

class App extends Component {
  state = {
    persons: [
      { id: "qwe1", name: "Farid", age: 22 },
      { id: "ghf2", name: "Goku", age: "infinite" },
      { id: "hgfhg3", name: "Tanaya", age: 19 }
    ],
    showPersons: false
  }

  namechangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //alernative of above  const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({ persons: persons });

  }


  switchNameHandler = () => {
    // Don't do this: this.state.person[0].name = "Farid Ansari";
    this.setState({
      persons: [
        { name: "Farid Ansari", age: 22 },
        { name: "Goku", age: "still infinite" },
        { name: "Tanaya", age: 20 }
      ]
    })
  }

  deletepersonhandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  render() {

    const classes = []

    if (this.state.persons.length < 3) {
      classes.push('red');
    }

    if (this.state.persons.length < 2) {
      classes.push('bold');
    }

    const style = {
      background: "blue",
      color: "white",
      font: "inherit",
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        background: "salmon",
        color: "black"
      }
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletepersonhandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.namechangeHandler(event, person.id)} />
            })
          }
        </div>

      )
      style.background = "red";
      style[':hover'] = {
        background: "lightgreen",
        color: "black"
      }
    }

    return (
      <StyleRoot>
        <div className='App'>
          <br />
          <br />
          <button style={style} onClick={this.togglePersonHandler} >Show Details</button>

          <h1>Hellooooooooooooo </h1>
          <p className={classes.join(' ')}>Look, I'm changing!!</p>
          {persons}
        </div>
      </StyleRoot>
    );
  }

}



export default Radium(App);
