import React from 'react';
import CharacterRaceSelector from '../../components/character_creation/CharacterRaceSelector';
import CharacterRaceDetail from '../../components/character_creation/CharacterRaceDetail';

class CharacterRace extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      races: [],
      selectedRace: null
    };

    this.handleRaceSelected = this.handleRaceSelected.bind(this);
  }

  handleRaceSelected(index){
    let selectedRace = this.state.races[index];
    fetch(selectedRace.url)
    .then(res => res.json())
    .then((raceDetails) => {
      selectedRace = raceDetails
    })
    .then(() => {
      this.setState({selectedRace: selectedRace})
    })
    // console.log(selectedRace);
  }

  render(){

    return (
      <div>
      <CharacterRaceSelector races={this.state.races} onRaceSelected={this.handleRaceSelected} />
      <CharacterRaceDetail race={this.state.selectedRace}/>
      </div>
    );
  }
}

export default CharacterRace;
