import React, { Fragment } from "react";

const Stats = props => {
  return (
    <div id="">
      <div id="stats-group">
        <Fragment>
          <div id="stats-group-box1"><h3>Armor Class</h3></div>
          <div id="stats-group-box1"><h3>Initiative</h3></div>
          <div id="stats-group-box1"><h3>Speed</h3></div>
          <div id="stats-group-box2"><h3>Current Hit Points</h3></div>
          <div id="stats-group-box2"><h3>Temporary Hit Points</h3></div>
          <div id="stats-group-box3"><h3>Hit dice</h3></div>
          <div id="stats-group-box3"><h3>Death Saves</h3></div>
        </Fragment>
      </div>
      <div id="attacks"><h3>Attacks & Spellcasting</h3></div>
    </div>
  );
};

export default Stats;
