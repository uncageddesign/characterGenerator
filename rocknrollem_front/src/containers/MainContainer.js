import React, {Component, Fragment} from 'react';


class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      identity: [],
      attributes: [],
      proficiencies: [],
      stats: [],
      equipment: [],
      background: [],
      traits: []
    }

  }

  render(){
    return(
      <h1>Cower before me, mortals!</h1>
    )
  }

}

export default MainContainer;
