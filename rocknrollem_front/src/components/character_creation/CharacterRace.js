import React from 'react';

const CharacterRace = (props) => {

function handleChange(event){
  props.onRaceSelected(event.target.value);
}

  if(!props.races.length === 0) {
    return "Loading Races";
  }

  const races =  props.races.results.map((race, index) => {
    return <option value={index} key={index}> {race.name} </option>
  })

  return (
    <select id="race-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose Your Race</option>
      {races}
    </select>
  )
}

export default CharacterRace;
