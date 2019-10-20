import React, {Component} from 'react';

class CharacterNameAlignement extends Component {
  constructor(props){
    super(props);
    this.state = {
      characterName: "",
      playerName: "",
      selectedAlignment: null
    }
    this.handleCharacterName = this.handleCharacterName.bind(this);
    this.handlePlayerName = this.handlePlayerName.bind(this);
    this.handleAlignmentSelect = this.handleAlignmentSelect.bind(this);
  }

  handleCharacterName(event){
    this.setState({characterName: event.target.value})
  }

  handlePlayerName(event){
    this.setState({playerName: event.target.value})
  }

  handleAlignmentSelect(event){
    this.setState({selectedAlignment: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newSheet = {
      characterName: this.state.characterName,
      playerName: this.state.playerName
    }
    this.props.onSubmit(newSheet)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name Your Character" name="characterName" onChange={this.handleCharacterName} value={this.state.characterName} />

          <input type="text" placeholder="Your Name" name="playerName" onChange={this.handlePlayerName} value={this.state.playerName} />

          <select name="alignment" onChange={this.handleAlignmentSelect}>
            <option diabled value="default">Select Alignment</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Chaotic Evil">Chaotic Evil</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="True Neutral">True Neutral</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Lawful Good">Lawful Good</option>
            <option value="Lawful Neutral">Lawful Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
          </select>
        </form>
      </div>
    )
  }
}

export default CharacterNameAlignement;
