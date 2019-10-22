import React from 'react';

const CharacterRaceSelector = (props) => {
  console.log(props);
  const options =  props.races.map((race, index) => {
  if(!props.races.length === 0) {
    return ("Loading Races")
  }
    return <option value={index} key={index}> {race.name} </option>
  })

  function handleChange(event){
    props.onRaceSelected(event.target.value);
  }

  return (
    <select id="selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose Your Race</option>
      {options}
    </select>
  )
}

export default CharacterRaceSelector;
