import React from 'react';
import CharacterClassSelector from '../../components/character_creation/CharacterClassSelector';

class CharacterClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      charClasses: [],
      selectedClass: null
    };
    this.handleCharClassSelected = this.handleCharClassSelected.bind(this);
  }

  handleCharClassSelected(index){
    let selectedClass = this.state.charClasses[index];

    this.setState({selectedClass: selectedClass})

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
