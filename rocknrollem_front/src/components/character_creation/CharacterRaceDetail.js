import React from 'react';

const CharacterRaceDetail = (props) => {

  if(!props.race){
    return (<p> Select a Race </p>)
  }

  //to dig into url need to add index somewhere

  return (
    <div>
      <h3>{props.race.name}</h3>
      <p>{props.race.alignment}</p>
    </div>
  )
}

export default CharacterRaceDetail;
