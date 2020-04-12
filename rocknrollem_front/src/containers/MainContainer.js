import React, { Component } from "react";
import CharacterContainer from "./CharacterContainer";
import SheetContainer from "./SheetContainer";
// import Request from "../helpers/request.js";
// import Equipment from "../helpers/equipment.js";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {
        characterName: "",
        class: "",
        race: "",
        alignment: "",
        playerName: "",
        background: {
          personalityTraits: "",
          ideals: "",
          bonds: "",
          flaws: ""
        }
      },
      characterStats: {
        attributes: [],
        modifiers: []
      },
      characterRaces: [],
      characterClasses: [],
      dataLoaded: false
    };
    this.addToAttributes = this.addToAttributes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const urlRaces = "http://www.dnd5eapi.co/api/races";
    const urlClasses = "http://www.dnd5eapi.co/api/classes";
    // const url = "http://www.dnd5eapi.co/api/equipment";

    //RACES
    fetch(urlRaces)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ characterRaces: responseData.results });
      })
      .catch(err => console.error("balls"));

    //CLASSES
    fetch(urlClasses)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ characterClasses: responseData.results });
      })
      .catch(err => console.error("Just cannae do it captain"));

    //Equipment
    // const request = new Request();
    // request.get("http://www.dnd5eapi.co/api/equipment").then(data => {
    //   this.setState({ characterClasses: data.results });
    //   console.log(data.results);
    // });
  }

  addToAttributes(att, mod) {
    if (this.state.characterStats.attributes.length < 6) {
      let newAttrs = this.state.characterStats.attributes;
      newAttrs.push(att);
      const newMods = this.state.characterStats.modifiers;
      newMods.push(mod);
      this.setState({
        characterStats: {
          attributes: newAttrs,
          modifiers: newMods
        }
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newChar = this.state.character;
    const newBackground = this.state.character.background;

    // GET CLASS
    const index = parseInt(event.target.class.value);
    const charClass = this.state.characterClasses[index].name;

    //GET RACE
    const indexR = parseInt(event.target.race.value);
    const charRace = this.state.characterRaces[indexR].name;

    //GET EQUIPMENT
    // const charEquip = new Equipment(charClass);
    // charEquip.getStartingEquipment();
    newChar.class = charClass;
    newChar.race = charRace;
    // newChar.equipment = charEquip;
    // console.log(newChar);
    newChar.characterName = event.target.characterName.value;
    newChar.alignment = event.target.alignment.value;
    newChar.playerName = event.target.playerName.value;
    newBackground.personalityTraits = event.target.personalityTraits.value;
    newBackground.ideals = event.target.ideals.value;
    newBackground.bonds = event.target.bonds.value;
    newBackground.flaws = event.target.flaws.value;

    this.setState({ character: newChar });
    this.setState({ dataLoaded: true });
    // window.location = "/sheet"
  }

  // <h1>Cower before me, mere mortals!</h1>
  render() {
    return (
      <div id="app-container">
        <img className="logo" src="logo.png" alt="logo"/>
        <CharacterContainer
          addToAttributes={this.addToAttributes}
          handleSubmit={this.handleSubmit}
        />
        <SheetContainer {...this.state} />
      </div>
    );
  }
}

export default MainContainer;
