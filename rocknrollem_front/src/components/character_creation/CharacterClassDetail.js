import React from 'react';

const CharacterClassDetail = (props) => {

  // console.log(props);

  if(!props.charClass){
    return (<p>Choose a Class</p>)
  }

  return (
    <div>
      <h3>{props.charClass.name}</h3>
      <p>{props.charClass.alignment}</p>
    </div>
  )
}

export default CharacterClassDetail;
