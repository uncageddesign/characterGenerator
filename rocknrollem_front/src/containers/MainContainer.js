import React from 'react';
import HomeScreen from '../components/HomeScreen';
import CharacterAttributes from '../components/character_creation/CharacterAttributes';

const MainContainer = () => {
  return (
    <div>
    <HomeScreen/>
    <CharacterAttributes />
    </div>
  )
}

export default MainContainer;
