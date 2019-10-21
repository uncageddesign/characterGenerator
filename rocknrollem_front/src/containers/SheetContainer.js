import React, {Component, Fragment} from 'react';
import Identity from '../components/character_sheet/Identity';

class SheetContainer extends Component {

  render(){
    return(
      <Fragment>
        <Identity {...this.props.identity}/>
      </Fragment>
    )
  }

}

export default SheetContainer;
