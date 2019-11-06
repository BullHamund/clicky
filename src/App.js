import React, { Component } from 'react';
import './style.css';

class App extends Component {

  state = {
    clickedCharacters: [],
    score: 0,
    roundEnd: false,
    characters: [
      {
        img: require("./charImages/fox.png"),
        id: 1
      },
      {
        img: require("./charImages/AshFox.png"),
        id: 2
      },
      {
        img: require("./charImages/badger.png"),
        id: 3
      },
      {
        img: require("./charImages/bean.png"),
        id: 4
      },
      {
        img: require("./charImages/Boggis.png"),
        id: 5
      },
      {
        img: require("./charImages/Bunce.png"),
        id: 6
      },
      {
        img: require("./charImages/kris.png"),
        id: 7
      },
      {
        img: require("./charImages/Kylie.png"),
        id: 8
      },
      {
        img: require("./charImages/Mrs_Fox.png"),
        id: 9
      }
    ]
  }

  onClick = (id) => {
    let { clickedCharacters, score, characters } = this.state;
    if (clickedCharacters.includes(id)) {
      console.log('you lost')
      clickedCharacters = []
      score = 0
    } else {
      score++
      clickedCharacters.push(id)
    }
    let characterCount = characters.length;
      let characterSelected;
      let temp;

      while (characterCount > 0) {
        characterSelected = Math.floor(Math.random() * characterCount);
        characterCount--;
        temp = characters[characterCount];
        characters[characterCount] = characters[characterSelected];
        characters[characterSelected] = temp;
      }

    // clickedCharacters.push(id)
    this.setState({
      clickedCharacters,
      score,
      characters
    })
  }

  render() {

  
    return (
      <div className="App">
        <h1>Clicky</h1>
        <p>Click on each picture once without repeating to win</p>
        <div className="img-zone">
        { this.state.characters.map(character => <img onClick= {() =>  this.onClick (character.id)} key={character.id} src={character.img} alt="placeholder" /> 
        )}
        </div>
      </div>
    );
  } 
}

export default App;
