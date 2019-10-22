import React, {Component, Fragment} from 'react';
import Identity from '../components/character_sheet/Identity';
import Attributes from '../components/character_sheet/Attributes'
import Background from '../components/character_sheet/Background'

class SheetContainer extends Component {

  render(){
    return(
      <Fragment>
        <Identity {...this.props.character}/>
        <Attributes {...this.props}/>
      <Background {...this.props.character.background}/>
      </Fragment>
    )
  }

}

export default SheetContainer;
