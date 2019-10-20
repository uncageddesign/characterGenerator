import React, {Fragment} from 'react';
import CharacterRaceContainer from './creation_containers/CharacterRaceContainer';
import CharacterClassContainer from './creation_containers/CharacterClassContainer';

const MainContainer = () => {
  return (
    <Fragment>
      <h1>Cower before me, mere mortals!</h1>
      <CharacterRaceContainer/>
      <CharacterClassContainer />
    </Fragment>
  )
}

export default MainContainer;
