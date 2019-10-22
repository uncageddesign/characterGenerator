import React, { Fragment } from "react";

const Identity = props => {
  return (
    <Fragment>
      <hr />
      <p>Name: {props.characterName}</p>
      <p>Class: {props.class}</p>
      <p>Race: {props.race}</p>
      <p>Alignment: {props.alignment}</p>
      <p>Player: {props.playerName}</p>
      <hr />
    </Fragment>
  );
};

export default Identity;
