import React from 'react';
import CharacterClass from '../../components/character_creation/CharacterClass';
import CharacterClassDetail from '../../components/character_creation/CharacterClassDetail';

class CharacterClassContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      CharClasses: [],
      selectedClass: null
    };
    this.handleCharClassSelected = this.handleCharClassSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://www.dnd5eapi.co/api/classes';

    fetch(url)
    .then(res => res.json())
    .then(charClasses => this.setState({CharClasses: charClasses}))
    .catch(err => console.error("It broke again"));
  }

  handleCharClassSelected(index){
    const selectedClass = this.state.charClasses[index];
    this.setState({selectedClass: selectedClass})
  }

  render(){
    return (
      <div>
        <CharacterClass charClasses={this.state.charClasses} onCharClassSelected={this.handleCharClassSelected}/>
        <CharacterClassDetail charClass={this.state.selectedClass}/>
      </div>
    );
  }
}

export default CharacterClassContainer;
