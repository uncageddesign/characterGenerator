import React from 'react';

const CharacterAttributes = (props) => {
  return(
    <ul>
      {props.attributes.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
}

export default CharacterAttributes;
