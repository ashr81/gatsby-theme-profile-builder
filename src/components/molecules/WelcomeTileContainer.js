import React, { useState, useEffect } from 'react';
import { Flex } from "theme-ui"
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { WelcomeTile } from '../atoms';
import { excludeMedia, media } from '../../../utils/mediaBreakpoints'

const WelcomeContainer = styled(Flex)`
  position: relative;
  ${media.mobile`
    width: 100%;
    height: 100vh;
  `}
  ${excludeMedia.mobile`
    width: 25%;
    height: 100%;
  `}
  background-size: cover;
  background-repeat: no-repeat;
  transform-style: preserve-3d;
  transition: all 2s ease;
  ${({ isFlipped }) => isFlipped && css`
    transform: rotateY(180deg);
  `}
`

const WelcomeTileFront = styled(WelcomeTile)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  backface-visibility: hidden;
  overflow: hidden;
`

const WelcomeTileBack = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ imageUrl }) => imageUrl});
  transform: rotateY(180deg);
`

const WelcomeTileContainer = ({ imageUrl }) => {
  const [flipped, updateFlipped] = useState(false);
  useEffect(() => {
    updateFlipped(true)
  }, [])
  return (
    <WelcomeContainer isFlipped={flipped}>
      <WelcomeTileBack imageUrl={imageUrl}/>
      <WelcomeTileFront />
    </WelcomeContainer>
  )
}

export default WelcomeTileContainer;