import React, {Fragment} from 'react';

const Identity = (props) => {
  console.log(props);

  return(
    <Fragment>
      <hr/>
      <p>Name: {props[0]}</p>
      <p>Character Name: {props[1]}</p>
      <p>Alignment: {props[2]}</p>
      <hr/>
    </Fragment>
  )

}

export default Identity;
