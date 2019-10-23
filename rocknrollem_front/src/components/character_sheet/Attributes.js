import React, { Fragment } from "react";

const Attributes = props => {
  const strMod = props.modifiers[0];
  const dexMod = props.modifiers[1];
  const conMod = props.modifiers[2];
  const intMod = props.modifiers[3];
  const wisMod = props.modifiers[4];
  const chaMod = props.modifiers[5];



  return (
    <Fragment>
      <hr />
      <p>
        STRENGTH: {props.attributes[0]}:({strMod})
      </p>
      <p>
        DEXTERITY: {props.attributes[1]}:({dexMod})
      </p>
      <p>
        CONSTITUTION: {props.attributes[2]}:(
        {conMod})
      </p>
      <p>
        INTELLIGENCE: {props.attributes[3]}:(
        {intMod})
      </p>
      <p>
        WISDOM: {props.attributes[4]}:(
        {wisMod})
      </p>
      <p>
        CHARISMA: {props.attributes[5]}:(
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
      <p>{dexMod} Acrobatics</p>
      <p>{wisMod} Animal Handling</p>
      <p>{intMod} Arcana</p>
      <p>{strMod} Athletics</p>
      <p>{chaMod} Deception</p>
      <p>{intMod} History</p>
      <p>{wisMod} Insight</p>
      <p>{chaMod} Intimidation</p>
      <p>{intMod} Investigation</p>
      <p>{wisMod} Medicine</p>
      <p>{intMod} Nature</p>
      <p>{wisMod} Perception</p>
      <p>{chaMod} Performance</p>
      <p>{chaMod} Persuasion</p>
      <p>{intMod} Religion</p>
      <p>{dexMod} Sleight of Hand</p>
      <p>{dexMod} Stealth</p>
      <p>{wisMod} Survival</p>
    </Fragment>
  );
};

export default Attributes;
