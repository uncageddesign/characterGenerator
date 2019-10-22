import React from 'react';
import EquipHelper from '../../helpers/EquipHelper';

const CharacterEquipment = (props) => {

  console.log(props.charClass.equipHelper);


  if(!props.charClass){
    return (<p>Choose a Class</p>)
  }

  return (
    <div>
    <p>{props.charClass.hit_die}</p>
    <p></p>
    </div>
  )
}

export default CharacterEquipment;

// <select id="selector" defaultValue="default" onChange={handleChange1}>
//   <option disabled value="default">Choose Armour</option>
//   <option value="test">test</option>
// </select>
//
// <select id="selector" defaultValue="default" onChange={handleChange2}>
//   <option disabled value="default">Choose Weapon 1</option>
//   <option value="test">test</option>
// </select>
//
// <select id="selector" defaultValue="default" onChange={handleChange3}>
//   <option disabled value="default">Choose Weapon 2</option>
//   <option value="test">test</option>
// </select>
//
// <select id="selector" defaultValue="default" onChange={handleChange4}>
//   <option disabled value="default">Choose Gear</option>
//   <option value="test">test</option>
// </select>
