import React, {Fragment} from 'react';
import CharacterRaceContainer from './creation_containers/CharacterRaceContainer';
import CharacterClassContainer from './creation_containers/CharacterClassContainer';
import CharacterStory from '../components/character_creation/CharacterStory';
import CharacterNameAlignment from '../components/character_creation/CharacterNameAlignment';
import CharacterAttributes from '../components/character_creation/CharacterAttributes';

const MainContainer = () => {

  return (
    <Fragment>
      <h1>Cower before me, mere mortals!</h1>
      <h2>Identity</h2>
      <CharacterNameAlignment />
      <h2>Race</h2>
      <CharacterRaceContainer/>
      <h2>Class</h2>
      <CharacterClassContainer />
      <h2>Roll Your Stats</h2>
      <CharacterAttributes />
      <h2>Background</h2>
      <CharacterStory />
      <button>Generate Character Sheet</button>
    </Fragment>
  )
}

export default MainContainer;
