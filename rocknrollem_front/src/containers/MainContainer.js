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
          background: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
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


  handleSubmit(event){
    event.preventDefault();
    const newChar = this.state.character;

    // GET CLASS
    const index = parseInt(event.target.class.value)
    const charClass = this.state.characterClasses[index]
    newChar.class = charClass

    newChar.characterName = event.target.characterName.value

    this.setState({character: newChar})
  }

  render(){
    return (
    <Fragment>
      <CharacterContainer addToAttributes={this.addToAttributes} handleSubmit={this.handleSubmit} />


      <SheetContainer {...this.state.character} />

    </Fragment>
  )
}

}

export default MainContainer;
