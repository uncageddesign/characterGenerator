import React from 'react';

const CharacterClassSelector = (props) => {

  console.log(props);
  const charClasses = props.charClasses.map((char, index) => {
    if(!props.charClasses.length === 0) {
      return ("Loading Classes")
    }
    return <option value={index} key={index}> {char.name} </option>
  })

  function handleChange(event) {
    props.onCharClassSelected(event.target.value);
  }

  return (
    <select id="selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Class</option>
        {charClasses}
    </select>
  )
}

export default CharacterClassSelector;
