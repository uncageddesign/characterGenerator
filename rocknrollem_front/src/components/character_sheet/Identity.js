import React, { Fragment } from "react";

const Identity = props => {
  return (
    <div className="identity-comp">
      <Fragment>
        <div id="charName">
        <p>Name: {props.characterName}</p>
        </div>
        <div id="identity-group">
        <p id="id-group-element">Class: {props.class}</p>
        <p id="id-group-element">Race: {props.race}</p>
        </div>
        <div id="identity-group">
        <p id="id-group-element">Alignment: {props.alignment}</p>
        <p id="id-group-element">Player: {props.playerName}</p>
        </div>
      </Fragment>
    </div>
  );
};

export default Identity;
