import React, { Fragment } from "react";

const Background = (props) => {
  return (
    <Fragment>
      <hr />
      <p>Personality Traits: {props.personalityTraits}</p>
      <p>Ideals: {props.ideals}</p>
      <p>Bonds: {props.bonds}</p>
      <p>Flaws: {props.flaws}</p>
      <hr />
    </Fragment>
  );
};

export default Background;
