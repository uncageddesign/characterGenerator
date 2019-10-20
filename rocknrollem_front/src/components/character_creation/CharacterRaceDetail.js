import React from 'react';

const CharacterRaceDetail = (props) => {
console.log(props);
  if(!props.url){
    return (<p> Select a Race </p>)
  }

  return (
    <h3>{props.url}</h3>
  )
}

export default CharacterRaceDetail;
