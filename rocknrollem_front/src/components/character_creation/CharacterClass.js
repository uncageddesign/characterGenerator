import React from 'react';

const CharacterClass = (props) => {

  function handleChange(event) {
    props.onCharClassSelected(event.target.value);
  }

  if(!props.charClasses.length === 0) {
    return "Loading Classes";
  }

  const charClasses = props.charClasses.map((charClass, index) => {
    return <option value={index} key={index}> {charClass.name} </option>
  })

  return (
    <select defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Class</option>
      {charClasses}
    </select>
  )
}

export default CharacterClass;
