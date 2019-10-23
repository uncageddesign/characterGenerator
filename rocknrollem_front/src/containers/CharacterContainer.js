import React, {Fragment} from 'react';
import CharacterClass from '../components/character_creation/CharacterClass';
import CharacterRace from '../components/character_creation/CharacterRace';
import CharacterAttributes from '../components/character_creation/CharacterAttributes';
import { Form, TextArea } from 'semantic-ui-react'

const CharacterContainer = (props) => {

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.handleSubmit(event)
  }

    return (
    <Fragment >
      <Form className="creator" onSubmit={handleSubmit}>
        <h2>Character Identity</h2>
      <div className="identity">
          <input className="textbox" type="text" placeholder="Name Your Character" name="characterName" />

          <input className="textbox" type="text" placeholder="Your Name" name="playerName" onChange={props.handlePlayerName}/>

          <select name="alignment" onChange={props.handleAlignmentSelect} defaultValue="default" >
            <option disabled value="default">Select Alignment</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Chaotic Evil">Chaotic Evil</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="True Neutral">True Neutral</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Lawful Good">Lawful Good</option>
            <option value="Lawful Neutral">Lawful Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
          </select>

      </div>
      <div className="selectors">
        <div>
        <h2>Race</h2>
          <CharacterRace race={CharacterRace.selectedRace}/>
        </div>
        <div>
        <h2>Class</h2>
          <CharacterClass class={CharacterClass.selectedClass}/>
        </div>
      </div>

      <div>
        <h2>Roll Your Ability Scores</h2>
        <CharacterAttributes onChange={props.addToAttributes}/>
      </div>

      <div className="background">
        <h2>Background</h2>
          <TextArea className="bgInput" placeholder="What are your character's personality traits?" name="personalityTraits" onChange={props.handlepersonalityTraits} />

          <TextArea className="bgInput" placeholder="What are your character's ideals?" name="ideals" onChange={props.handleIdeals} />

          <TextArea className="bgInput" placeholder="What are your character's bonds?"
          name="bonds" onChange={props.handleBonds} />

          <TextArea className="bgInput" placeholder="Nobody's perfect. What are your character's flaws?" name="flaws" onChange={props.handleFlaws} />
      </div>

      <button>Generate Character Sheet</button>

      </Form>
    </Fragment>
  )
}

export default CharacterContainer;
