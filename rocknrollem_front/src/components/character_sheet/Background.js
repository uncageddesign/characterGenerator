import React, { Fragment } from "react";

const Background = (props) => {
  return (
    <div ID="background">
    <Fragment>
      <div id="bg-box"><h3>Personality Traits</h3> <p>{props.personalityTraits}</p></div>
      <div id="bg-box"><h3>Ideals</h3> <p>{props.ideals}</p></div>
      <div id="bg-box"><h3>Bonds</h3> <p>{props.bonds}</p></div>
      <div id="bg-box"><h3>Flaws</h3> <p>{props.flaws}</p></div>
    </Fragment>
    </div>
  );
};

export default Background;
