import React from 'react';
import { WelcomeContainer, WelcomeTileContainer, WelcomeIntroContainer } from '../molecules';

const WelcomeTiles = ({ layouts: tiles, intro }) => {
  return (
    <WelcomeContainer>
      {tiles.map((tile) => (
        <WelcomeTileContainer key={tile.id} imageUrl={tile.imageUrl}/>
      ))}
      <WelcomeIntroContainer {...intro}/>
    </WelcomeContainer>
  )
}

export default WelcomeTiles;