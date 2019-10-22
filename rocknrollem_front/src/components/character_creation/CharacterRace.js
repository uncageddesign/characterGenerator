import React from 'react';
import CharacterRaceSelector from '../../components/character_creation/CharacterRaceSelector';

class CharacterRace extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      races: [],
      selectedRace: null
    };

    this.handleRaceSelected = this.handleRaceSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://www.dnd5eapi.co/api/races'

    fetch(url)
    .then(response => response.json())
    .then(responseData => {
      this.setState(
      {races: responseData.results}
    )
  }).catch(err => console.error('balls'));
  }

  handleRaceSelected(index){
    let selectedRace = this.state.races[index];
    this.setState({selectedRace: selectedRace})
  }

  render(){

    return (
      <div>
      <CharacterRaceSelector races={this.state.races} onRaceSelected={this.handleRaceSelected} />
      </div>
    );
  }
}

export default CharacterRace;
