import React, { Component, Fragment } from "react";
import Identity from "../components/character_sheet/Identity";
import Stats from "../components/character_sheet/Stats";
import Attributes from "../components/character_sheet/Attributes";
import Equipment from '../components/character_sheet/Equipment';
import Background from "../components/character_sheet/Background";

class SheetContainer extends Component {
  render() {
    
    return (
      <div id="sheet">
      <Fragment>
        <Identity {...this.props.character} />
        <Stats />
        <Attributes {...this.props.characterStats} />
      <Equipment {...this.props.character.equipment} />
        <Background {...this.props.character.background} />
      </Fragment>
      </div>
    );
  }
}

export default SheetContainer;
