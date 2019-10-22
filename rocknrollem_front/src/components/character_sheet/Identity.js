import React, { Fragment } from "react";

const Identity = props => {
  return (
    <Fragment>
      <hr />
      <p>Name: {props[0]}</p>
      <p>Class: {props[1]}</p>
      <p>Race: {props[2]}</p>
      <p>Alignment: {props[3]}</p>
      <p>Player: {props[4]}</p>
      <hr />
    </Fragment>
  );
};

export default Identity;
