import React from 'react';
import CharacterClassSelector from '../../components/character_creation/CharacterClassSelector';
// import Equipment from '../../helpers/equipment.js'

class CharacterClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      charClasses: [],
      selectedClass: null
    };
    this.handleCharClassSelected = this.handleCharClassSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://www.dnd5eapi.co/api/classes/'

    fetch(url)
    .then(response => response.json())
    .then(responseData => {
      this.setState(
      {charClasses: responseData.results}
    )
  }).catch(err => console.error('Just cannae do it captain'));
  }

  handleCharClassSelected(index){
    let selectedClass = this.state.charClasses[index];
    this.setState({selectedClass: selectedClass})
    console.log(selectedClass);

    // const equipment = new Equipment(selectedClass)
    // equipment.getStartingEquipment();
    // this.setState({character:{equipment: equipment}})
  }

  render(){
    return (
      <div>
        <CharacterClassSelector charClasses={this.state.charClasses} onCharClassSelected={this.handleCharClassSelected}/>
      </div>
    );
  }
}

export default CharacterClass;
