import React from 'react';

const CharacterClassDetail = (props) => {

  if(!props.charClass){
    return <p>Choose a Class</p>
  }

  return (
    <div>
      <p>Class details to come</p>
    </div>
  )
}

export default CharacterClassDetail;
