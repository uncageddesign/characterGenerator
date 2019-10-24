import React, { Component, Fragment } from "react";
import Identity from "../components/character_sheet/Identity";
import Stats from "../components/character_sheet/Stats";
import Attributes from "../components/character_sheet/Attributes";
import EquipmentList from "../components/character_sheet/EquipmentList";
import Background from "../components/character_sheet/Background";

class SheetContainer extends Component {
  render() {

    if (!this.props.dataLoaded) {
      return null;
    }

    return (
      <div id="sheet">
      <Fragment>
        <Identity {...this.props.character} />
        <div id="sheet-body">
          <Attributes {...this.props.characterStats} />
          <Stats />
          <Background {...this.props.character.background} />
          <div>
          <div id="pass-wis">[ ] Passive Wisdom</div>
          <div id="prof-lang"><h3>Proficencies & Languages</h3></div>
          </div>
          <EquipmentList {...this.props.character.equipment} />
          <div id="feature"><h3>Features & Traits</h3></div>
        </div>
      </Fragment>
      </div>
    )
  }
}

export default SheetContainer;
