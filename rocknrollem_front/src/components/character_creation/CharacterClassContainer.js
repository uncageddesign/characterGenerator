import React from 'react';
// import CharacterClass from '../../components/character_creation/CharacterClass';
// import CharacterEquipment from '../../components/character_creation/CharacterEquipment';

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
    const charClasses = props.charClasses.map((char, index) => {
      if(!props.charClasses.length === 0) {
        return ("Loading Classes")
      }
      return <option value={index} key={index}> {char.name} </option>
    })

    function handleChange(event) {
      props.onCharClassSelected(event.target.value);
    }

    return (
      <select id="selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a Class</option>
          {charClasses}
      </select>
    )
  }
}

export default CharacterClassContainer;
