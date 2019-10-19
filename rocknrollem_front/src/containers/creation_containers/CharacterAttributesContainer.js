import React, {Component, Fragment} from 'react';
import Dice from '../../components/character_creation/Dice';
import CharacterAttributes from '../../components/character_creation/CharacterAttributes';

class CharacterAttributesContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        attributes: [1,2,3,4,5,6]
      };

    }

    render(){
      return (
        <Fragment>
          <CharacterAttributes attributes={this.state.attributes}/>
        </Fragment>
      )
    }

}

export default CharacterAttributesContainer;
