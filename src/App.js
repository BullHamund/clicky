import React, { Component } from 'react';
import './style.css';

class App extends Component {

  state = {
    clickedCharacters: [],
    score= 0,
    characters: [
      {
        img: require("./charImages/fox.jpeg"),
        id: 1
      },
      {
        img: require("./charImages/AshFox.gif"),
        id: 2
      },
      {
        img: require("./charImages/badger.jpg"),
        id: 3
      },
      {
        img: require("./charImages/bean.jpeg"),
        id: 4
      },
      {
        img: require("./charImages/Boggis.jpg"),
        id: 5
      },
      {
        img: require("./charImages/Bunce.jpg"),
        id: 6
      },
      {
        img: require("./charImages/kris.jpg"),
        id: 7
      },
      {
        img: require("./charImages/Kylie.jpg"),
        id: 8
      },
      {
        img: require("./charImages/Mrs_Fox.jpg"),
        id: 9
      },
    ]
  }

  onClick = (id) => {
    let { clickedCharacters } = this.state;
    if (clickedCharacters.includes(id)) {
      console.log('you lost')
      clickedCharacters = []
      score = 0
    } else {
      score++
      clickedCharacters.push(id)
    }

    clickedCharacters.push(id)
    this.setState({
      clickedCharacters,
      score
    })
  }

  render() {

  
    return (
      <div className="App">
        <h1>Clicky</h1>
        <p>Click on each picture once without repeating to win</p>
        <div className="img-zone">
        {this.state.characters.map(character => <img onClick= {this.onClick} key={character.id} src={character.img} alt="placeholder" /> 
        )}
        </div>
      </div>
    );
  } 
}

export default App;
