import React from 'react';
import { Flex } from "theme-ui"
import styled from '@emotion/styled';
import { media, excludeMedia } from '../../../utils/mediaBreakpoints';

const WelcomeContainer = styled(Flex)`
  width: 100vw;
  ${excludeMedia.mobile`
    height: 100vh;
  `}
  background-image: radial-gradient(circle 506px at 50.6% 16.5%,  rgba(239,252,250,1) 5.5%, rgba(154,192,206,1) 100.2%);
  ${media.mobile`
    flex-direction: column;
  `}
`

export default WelcomeContainer;