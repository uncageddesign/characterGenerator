import React from 'react';

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
    .catch(err => console.error("It broke again"))
  }

  
}
