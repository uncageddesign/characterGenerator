import React, { Component, Fragment } from "react";
import CharacterContainer from "./CharacterContainer";
import SheetContainer from "./SheetContainer";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {
          name: "Clyde",
          class: "Barbarian",
          race: "Azer (Flameheart)",
          alignment: "Chaotic Neutral",
          player: "Mhairi",
          attributes: [17, 12, 15, 8, 10, 10],
          modifiers: [],
          background: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ],
          equipment: []
        },
      characterRaces: [],
      characterClasses: []
    };
  }

  render() {
    return (
      <Fragment>
        <CharacterContainer />

        <SheetContainer {...this.state} />
      </Fragment>
    );
  }
}

export default MainContainer;
