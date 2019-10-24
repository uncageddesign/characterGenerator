import React, { Fragment } from "react";

const Attributes = props => {
  const strMod = props.modifiers[0];
  const dexMod = props.modifiers[1];
  const conMod = props.modifiers[2];
  const intMod = props.modifiers[3];
  const wisMod = props.modifiers[4];
  const chaMod = props.modifiers[5];



  return (
    <div id="attributes">
      <Fragment>
        <div id="stat-block">
          <div id="ability-scores">
            <h6>STRENGTH</h6>
            {props.attributes[0]} <br />
            ({strMod})
          </div>
          <div id="ability-scores">
            <h6>DEXTERITY</h6>
            {props.attributes[1]} <br />
            ({dexMod})
          </div>
          <div id="ability-scores">
            <h6>CONSTITUTION</h6>
            {props.attributes[2]} <br />
            ({conMod})
          </div>
          <div id="ability-scores">
            <h6>INTELLIGENCE</h6>
            {props.attributes[3]} <br />
            ({intMod})
          </div>
          <div id="ability-scores">
            <h6>WISDOM</h6>
            {props.attributes[4]} <br />
            ({wisMod})
          </div>
          <div id="ability-scores">
            <h6>CHARISMA</h6>
            {props.attributes[5]} <br />
            ({chaMod})
          </div>
        </div>
        <div>
        <div id="saving-throw">
          <h3>Saving Throws</h3>
          <p id="long-list">
            O {strMod} Strength
          </p>
          <p id="long-list">
            O {dexMod} Dexterity
          </p>
          <p id="long-list">
            O {conMod} Constitution
          </p>
          <p id="long-list">
            O {intMod} Intelligence
          </p>
          <p id="long-list">
            O {wisMod} Wisdom
          </p>
          <p id="long-list">
            O {chaMod} Charisma
          </p>
        </div>
        <div id="skills">
          <h3>Skills</h3>
          <p id="long-list">O {dexMod} Acrobatics</p>
          <p id="long-list">O {wisMod} Animal Handling</p>
          <p id="long-list">O {intMod} Arcana</p>
          <p id="long-list">O {strMod} Athletics</p>
          <p id="long-list">O {chaMod} Deception</p>
          <p id="long-list">O {intMod} History</p>
          <p id="long-list">O {wisMod} Insight</p>
          <p id="long-list">O {chaMod} Intimidation</p>
          <p id="long-list">O {intMod} Investigation</p>
          <p id="long-list">O {wisMod} Medicine</p>
          <p id="long-list">O {intMod} Nature</p>
          <p id="long-list">O {wisMod} Perception</p>
          <p id="long-list">O {chaMod} Performance</p>
          <p id="long-list">O {chaMod} Persuasion</p>
          <p id="long-list">O {intMod} Religion</p>
          <p id="long-list">O {dexMod} Sleight of Hand</p>
          <p id="long-list">O {dexMod} Stealth</p>
          <p id="long-list">O {wisMod} Survival</p>
        </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Attributes;
