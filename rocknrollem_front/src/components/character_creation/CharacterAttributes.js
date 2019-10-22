import React, {Component} from 'react';
import DiceImage from "./DiceImage";

class CharacterAttributes extends Component {

constructor(props){
  super(props);
  this.state = {
    //possibly goes in character sheet
    numberOfDice: null,
    rolls: [],
    rollSum: null
  }
  this.addToAttributes = this.addToAttributes.bind(this);
  };

  diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum
    });
  };

  calculateScores(){
    let att = this.state.rollSum;
    let mod = Math.floor(att/2) - 5
    console.log(att);
    props.addToAttributes(att, mod);
  }

  render(){
    return(
          <div className="buttons">
          {
            this.state.rolls.map((roll, index) => <DiceImage roll={roll} key={index} />)
          }
          {
            this.state.numberOfDice ? (
              <h2>
                Roll Total: <span className="sum">{this.state.rollSum}</span> /{" "}
                {this.state.numberOfDice * 6}
              </h2>
            ) : null
          }
          {[3].map(number => {
            let text = "Roll Stat";
            return (
              <button
                key={number}
                onClick={() => this.diceRoll(number)}
                className="button"
              >
                {text}
              </button>
            );
          })
        }
        {
          <button id="attribute" onClick={this.calculateScores} value={this.rollSum}>Add to Stats</button>
        }
        </div>
      )
  }
}

export default CharacterAttributes;
