import React, {Fragment} from 'react';

const Attributes = (props) => {

  return(
    <Fragment>
      <hr/>
      <p>STRENGTH: {props[0]}</p>
      <p>DEXTERITY: {props[1]}</p>
      <p>CONSTITUTION: {props[2]}</p>
      <p>INTELLIGENCE: {props[3]}</p>
      <p>WISDOM: {props[4]}</p>
      <p>CHARISMA: {props[5]}</p>
      <hr/>
    </Fragment>
  )

}

export default Attributes;
