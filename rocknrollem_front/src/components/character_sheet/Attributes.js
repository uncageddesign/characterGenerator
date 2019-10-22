import React, { Fragment } from "react";

const Attributes = props => {
  const strMod = props.characterStats.modifiers[0];
  const dexMod = props.characterStats.modifiers[1];
  const conMod = props.characterStats.modifiers[2];
  const intMod = props.characterStats.modifiers[3];
  const wisMod = props.characterStats.modifiers[4];
  const chaMod = props.characterStats.modifiers[5];



  return (
    <Fragment>
      <hr />
      <p>
        STRENGTH: {props.characterStats.attributes[0]}:({strMod})
      </p>
      <p>
        DEXTERITY: {props.characterStats.attributes[1]}:({dexMod})
      </p>
      <p>
        CONSTITUTION: {props.characterStats.attributes[2]}:(
        {conMod})
      </p>
      <p>
        INTELLIGENCE: {props.characterStats.attributes[3]}:(
        {intMod})
      </p>
      <p>
        WISDOM: {props.characterStats.attributes[4]}:(
        {wisMod})
      </p>
      <p>
        CHARISMA: {props.characterStats.attributes[5]}:(
        {chaMod})
      </p>
      <hr />
      <h3>Saving Throws</h3>
      <p>
        {strMod} Strength
      </p>
      <p>
        {dexMod} Dexterity
      </p>
      <p>
        {conMod} Constitution
      </p>
      <p>
        {intMod} Intelligence
      </p>
      <p>
        {wisMod} Wisdom
      </p>
      <p>
        {chaMod} Charisma
      </p>
      <hr />
      <h3>Skills</h3>
      <p>{}</p>
    </Fragment>
  );
};

export default Attributes;
