import React, {Component, Fragment} from 'react';
import CharacterContainer from './CharacterContainer';
import SheetContainer from './SheetContainer';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      character:  {
          characterName: "",
          class: "",
          race: "",
          alignment: "",
          playerName: "",
          background: {
            personalityTraits: "",
            ideal: "",
            bonds: "",
            flaws: ""
          },
          equipment: []
        },
        characterStats: {
          attributes: [],
          modifiers: []
        },
      characterRaces: [],
      characterClasses: [],
    };
    this.addToAttributes = this.addToAttributes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    const urlRaces = 'http://www.dnd5eapi.co/api/races'
    const url = 'http://www.dnd5eapi.co/api/startingequipment'

    //RACES
    fetch(urlRaces)
    .then(response => response.json())
    .then(responseData => {
      this.setState(
      {characterRaces: responseData.results}
    )
    }).catch(err => console.error('balls'));

    //CLASSES
    fetch(url)
    .then(response => response.json())
    .then(responseData => {
      this.setState(
      {characterClasses: responseData.results}
    )
  }).catch(err => console.error('Just cannae do it captain'));
  }

  addToAttributes(att, mod){
    if(this.state.characterStats.attributes.length < 6){
      let newAttrs = this.state.characterStats.attributes;
      newAttrs.push(att)
      const newMods = this.state.characterStats.modifiers;
      newMods.push(mod)
      this.setState( {
        characterStats:{
        attributes: newAttrs,
        modifiers: newMods
      }
      })
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const newChar = this.state.character;
    const newBackground = this.state.character.background;

    // GET CLASS
    const index = parseInt(event.target.class.value)
    const charClass = this.state.characterClasses[index].name

    //GET RACE
    const indexR = parseInt(event.target.race.value)
    const charRace = this.state.characterRaces[indexR].name

    newChar.class = charClass
    newChar.race = charRace
    newChar.characterName = event.target.characterName.value
    newChar.alignment = event.target.alignment.value
    newChar.playerName = event.target.playerName.value
    newBackground.personalityTraits = event.target.personalityTraits.value
    newBackground.ideals = event.target.ideals.value
    newBackground.bonds = event.target.bonds.value
    newBackground.flaws = event.target.flaws.value

    this.setState({character: newChar})
  }

  render(){
    return (
    <Fragment>
      <CharacterContainer addToAttributes={this.addToAttributes} handleSubmit={this.handleSubmit} />


      <SheetContainer {...this.state} />

    </Fragment>
  )
}

}

export default MainContainer;
