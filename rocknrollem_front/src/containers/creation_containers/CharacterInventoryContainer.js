import React from 'react';

class CharacterInventoryContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      equipment: [], //brings in whole endpoint
      weapons: state.equipment.slice(0, 64), //uses indexes 0 - 64
      gear: state.equipment.slice(65, 126), //uses indexes 65 - 191
      selectedWeapon: null,
      selectedGear: null
    }
    this.handleWeaponSelected = this.handleWeaponSelected.bind(this);
    this.handleGearSelected = this.handleGearSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://www.dnd5eapi.co/api/equipment/'

    fetch(url)
    .then(res => res.json())
    .then(equipment => this.setState({equipment: equipment}))
    .catch(err => console.error("no equipment for you"));
  }

  //Could reduced the array by the equipment_category instead of splicing?
  // const weapons = state.equipment.slice(0, 64);
  // const gear = state.equipment.slice(65, 126);

  handleWeaponSelected(index){
    const selectedWeapon = this.state.weapons[index];
    this.setState({selectedWeapon: selectedWeapon})
  }

  handleGearSelected(index){
    const selectedGear = this.state.gear[index];
    this.setState({selectedGear: selectedGear})
  }

  render(){
    return(
      <div>
        <CharacterWeapons weapons={this.state.weapons} onWeaponSelected={this.handleWeaponSelected}/>
        <CharacterWeaponsDetail weapon={this.state.selectedWeapon}/>
        <CharacterGear gear={this.state.gear} onGearSelected={this.handleGearSelected}/>
        <CharacterGearDetails gear={this.state.selectedGear}/>
      </div>
    )
  }

}
