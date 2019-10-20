import React from 'react';
import CharacterRace from '../../components/character_creation/CharacterRace';
import CharacterRaceDetail from '../../components/character_creation/CharacterRaceDetail';

class CharacterRaceContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      races: [],
      selectedRace: null,
      raceDetails: null
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
    }).catch(err => console.error(err));

    const detailUrl = 'http://www.dnd5eapi.co/api/races' + this.races.url
    fetch(detailUrl)
    .then(selectedResponse => selectedResponse.json())
    .then(selectedResponseData => {
      this.setState(
        {raceDetails: selectedResponseData.url}
      )
    }).catch(err => console.error(err));


  }

  handleRaceSelected(index){
    const selectedRace = this.state.races[index];
    this.setState({selectedRace: selectedRace})
    console.log(selectedRace);
  }

  render(){
    return (
      <div>
      <CharacterRace races={this.state.races} onRaceSelected={this.handleRaceSelected} />
      <CharacterRaceDetail url={this.state.selectedRaceAPI}/>
      </div>
    );
  }
}

export default CharacterRaceContainer;
