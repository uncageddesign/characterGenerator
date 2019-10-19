import React from 'react';

const CharacterRaceDetail = (props) => {

  if(!props.race){
    return (<p> Select a Race </p>)
  }

  return (
    <p>Details</p>
  )
}

export default CharacterRaceDetail;
