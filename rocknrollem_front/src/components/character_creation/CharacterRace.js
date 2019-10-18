import React from 'react';

const CharacterRace = (props) => {

  if(!props.races.length === 0) {
    return "Loading Races";
  }

  const races = props.races.map((race, index) => {
    return <option value={index} key={index}> {race.name} </option>
  })

  return (
    <select>
      <option>Choose Your Race</option>
      {races}
    </select>
  )

}

export default CharacterRace;
