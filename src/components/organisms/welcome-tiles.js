import React from 'react';
import { WelcomeContainer, WelcomeTileContainer } from '../molecules';

const WelcomeTiles = () => {
  return (
    <WelcomeContainer>
      <WelcomeTileContainer key="1" imageUrl='https://res.cloudinary.com/ashrith/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1568130979/_AV55244_dnuuby.jpg'/>
      <WelcomeTileContainer key="2" imageUrl='https://res.cloudinary.com/ashrith/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1568130979/_AV55244_dnuuby.jpg'/>
      <WelcomeTileContainer key="3" imageUrl='https://res.cloudinary.com/ashrith/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1568130979/_AV55244_dnuuby.jpg'/>
      <WelcomeTileContainer key="4" imageUrl='https://res.cloudinary.com/ashrith/image/upload/v1568130979/_AV55244_dnuuby.jpg'/>
    </WelcomeContainer>
  )
}

export default WelcomeTiles;