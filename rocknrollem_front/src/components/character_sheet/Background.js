import React, {Fragment} from 'react';

const Background = (props) => {

  return(
    <Fragment>
      <hr/>
      <p>Personality Traits: {props[0]}</p>
      <p>Ideals: {props[1]}</p>
      <p>Bonds: {props[2]}</p>
      <p>Flaws: {props[3]}</p>
      <hr/>
    </Fragment>
  )

}

export default Background;
