import React, {Component} from 'react';

//change to Background

class CharacterStory extends Component {
  constructor(props){
    super(props);
    this.state = {
      personalityTraits: "",
      ideals: "",
      bonds: "",
      flaws: ""
    }
    this.handlepersonalityTraits = this.handlepersonalityTraits.bind(this);
    this.handleIdeals = this.handleIdeals.bind(this);
    this.handleBonds = this.handleBonds.bind(this);
    this.handleFlaws = this.handleFlaws.bind(this);
  }

  handlepersonalityTraits(event){
    this.setState({personalityTraits: event.target.value})
  }

  handleIdeals(event){
    this.setState({ideals: event.target.value})
  }

  handleBonds(event){
    this.setState({bonds: event.target.value})
  }

  handleFlaws(event){
    this.setState({flaws: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newStory = {
      personalityTraits: this.state.personalityTraits,
      ideals: this.state.ideals,
      bonds: this.state.bonds,
      flaws: this.state.flaws
    }
    this.props.onSubmit(newStory)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="textarea" rows="20" cols="40" placeholder="What are your character's personality traits?" name="personalityTraits" onChange={this.handlepersonalityTraits} value={this.state.personalityTraits} />

          <input type="textarea" rows="20" cols="40" placeholder="What are your character's ideals?" name="ideals" onChange={this.handleIdeals} value={this.state.ideals}/>

          <input type="textarea" rows="20" cols="40" placeholder="What are your character's bonds?"
          name="bonds" onChange={this.handleBonds} value={this.state.bonds}/>

          <input type="textarea" rows="20" cols="40" placeholder="Nobody's perfect. What are your character's flaws?" name="flaws" onChange={this.handleFlaws} value={this.state.flaws}/>
        </form>
      </div>
    )
  }
}

export default CharacterStory;
