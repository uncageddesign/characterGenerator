import React, {Fragment} from 'react';
import CharacterClass from '../components/character_creation/CharacterClass';
import CharacterRace from '../components/character_creation/CharacterRace';
import CharacterStory from '../components/character_creation/CharacterStory';
import CharacterNameAlignment from '../components/character_creation/CharacterNameAlignment';
import CharacterAttributes from '../components/character_creation/CharacterAttributes';

class CharacterContainer extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      identity: [],
      race: [],
      charClass: [],
      abilities: [],
      background: []
    }
    this.saveAll = this.saveAll.bind(this);
  }

  saveAll(){
    if(this.state.identity || this.state.race){
      let identity = [this.state.characterName, this.state.playerName, this.state.selectedAlignment];
      let race = this.selectedRace;
      let charClass = this.selectedClass;
      let abilites = [this.state.attributes, this.state.modifiers];
      let background = [this.state.personalityTraits, this.state.ideals, this.state.bonds, this.state.flaws];

      this.setState({
        identity: this.state.identity.concat(identity),
        race: this.state.race.concat(race),
        charClass: this.state.charClass.concat(charClass),
        abilities: this.state.abilities.concat(abilites),
        background: this.state.background.concat(background)
      })
    }
  }


  render(){
    return (
    <Fragment>
      <h1>Cower before me, mere mortals!</h1>
      <h2>Identity</h2>
      <CharacterNameAlignment
        characterName={CharacterNameAlignment.characterName}
        playerName={CharacterNameAlignment.playerName}
        alignment={CharacterNameAlignment.selectedAlignment}
        />
      <h2>Race</h2>
      <CharacterRace race={CharacterRace.selectedRace}/>
      <h2>Class</h2>
      <CharacterClass charClass={CharacterClass.selectedClass}/>
      <h2>Roll Your Stats</h2>
      <CharacterAttributes
      attributes={CharacterAttributes.attributes}
      modifiers={CharacterAttributes.modifiers}
      />
      <h2>Background</h2>
      <CharacterStory
      personalityTraits={CharacterStory.personalityTraits}
      ideals={CharacterStory.ideals}
      bonds={CharacterStory.bonds}
      flaws={CharacterStory.flaws}
      />
      <button onClick={this.saveAll}>Generate Character Sheet</button>
    </Fragment>
  )}
}

export default CharacterContainer;
