import React from 'react';
import CharacterClass from '../../components/character_creation/CharacterClass';
import CharacterClassDetail from '../../components/character_creation/CharacterClassDetail';

class CharacterClassContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      charClasses: [],
      selectedClass: null
    };
    this.handleCharClassSelected = this.handleCharClassSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://www.dnd5eapi.co/api/classes'

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
    fetch(selectedClass.url)
    .then(res => res.json())
    .then((classDeets) => {
      selectedClass = classDeets
    })
    .then(() => {
    this.setState({selectedClass: selectedClass})
      })
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
