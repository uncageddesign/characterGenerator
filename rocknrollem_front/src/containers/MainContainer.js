import React, {Component, Fragment} from 'react';
import CharacterContainer from './CharacterContainer';
import SheetContainer from './SheetContainer';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      character: {
          characterName: "",
          class: "",
          race: "",
          alignment: "",
          playerName: "",
          attributes: [],
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
      characterClasses: [],
    };
    this.addToAttributes = this.addToAttributes.bind(this);
  }

  addToAttributes(att, mod){
    if(this.state.attributes.length < 6){
      this.setState({
        attributes: this.state.attributes.concat(att),
        modifiers: this.state.modifiers.concat(mod)
      })
    }
  }

  handleCharacterName(event){
    this.setState({characterName: event.target.value})
  }

  handlePlayerName(event){
    this.setState({playerName: event.target.value})
  }

  handleAlignmentSelect(event){
    this.setState({alignment: event.target.value})
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
    this.state.onSubmit()
  }

  render(){
    return (
    <Fragment>
      <CharacterContainer />


      <SheetContainer {...this.state.character} />

    </Fragment>
  )
}

}

export default MainContainer;
