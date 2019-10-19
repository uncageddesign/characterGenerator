import React from 'react';
import CharacterRace from '../../components/character_creation/CharacterRace';
import CharacterRaceDetail from '../../components/character_creation/CharacterRaceDetail';

class CharacterRaceContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isDataLoaded: false,
      races: [],
      selectedRace: null
    };

    this.handleRaceSelected = this.handleRaceSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://www.dnd5eapi.co/api/races/'

    fetch(url)
    .then(res => res.json())
    .then(races => this.setState({races: races}))
    .catch(err => console.error('balls'));

    console.log(this.races);
  }

  handleRaceSelected(index){
    const selectedRace = this.state.races[index];
    this.setState({selectedRace: selectedRace})
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
