import React from 'react';
import CharacterRace from '../../components/character_creation/CharacterRace';
import CharacterRaceDetail from '../../components/character_creation/CharacterRaceDetail';

class CharacterRaceContainer extends React.Component {
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
      <CharacterRace races={this.state.races} onRaceSelected={this.handleRaceSelected} />
      <CharacterRaceDetail race={this.state.selectedRace}/>
      </div>
    );
  }
}

export default CharacterRaceContainer;
