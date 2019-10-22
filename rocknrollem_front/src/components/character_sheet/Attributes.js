import React, {Fragment} from 'react';

const Attributes = (props) => {

  return(
    <Fragment>
      <hr/>
    <h3>STRENGTH: {props.attributes[0]}:({props.modifiers[0]})</h3>
      <p>DEXTERITY: {props.attributes[1]}:({props.modifiers[1]})</p>
      <p>CONSTITUTION: {props.attributes[2]}:({props.modifiers[2]})</p>
      <p>INTELLIGENCE: {props.attributes[3]}:({props.modifiers[3]})</p>
      <p>WISDOM: {props.attributes[4]}:({props.modifiers[4]})</p>
      <p>CHARISMA: {props.attributes[5]}:({props.modifiers[5]})</p>
      <hr/>
    </Fragment>
  )

}

export default Attributes;
