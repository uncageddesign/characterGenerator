import React, {Component, Fragment} from 'react';
import CharacterContainer from './CharacterContainer';
import SheetContainer from './SheetContainer';


class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      character: {
          characterName: "Clyde",
          class: "Barbarian",
          race: "Azer (Flameheart)",
          alignment: "Chaotic Neutral",
          playerName: "Mhairi",
          attributes: [17, 12, 15, 8, 10, 10],
          modifiers: [],
          background: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          equipment: []
        },
      characterRaces: [],
      characterClasses: []
    };
  }

  addToAttributes(att, mod){
    if(this.state.attributes.length < 6){
      this.setState({
        attributes: this.state.attributes.concat(att),
        modifiers: this.state.modifiers.concat(mod)
      })
    }
  }

  createIdentity(){

  }

  handleCharacterName(event){
    this.setState({characterName: event.target.value})
  }

  handlePlayerName(event){
    this.setState({playerName: event.target.value})
  }

  handleAlignmentSelect(event){
    this.setState({selectedAlignment: event.target.value})
  }

  handlepersonalityTraits(event){
    this.setState({personalityTraits: event.target.value})
  }

  handleIdeals(event){
    this.setState({ideals: event.target.value})
  }

  handleBonds(event){
    this.setState({bonds: event.target.value})
  }

  handleFlaws(event){
    this.setState({flaws: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    // const newSheet = {
    //   characterName: this.state.characterName,
    //   playerName: this.state.playerName,
    //   personalityTraits: this.state.personalityTraits,
    //   ideals: this.state.ideals,
    //   bonds: this.state.bonds,
    //   flaws: this.state.flaws
    // }
    this.state.onSubmit()
  }

  render(){
    return (
    <Fragment>
      <CharacterContainer />


      <SheetContainer {...this.state} />

    </Fragment>
  )
}

}

export default MainContainer;
