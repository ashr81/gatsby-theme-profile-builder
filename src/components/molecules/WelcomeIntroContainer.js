import React, { useState, useEffect } from 'react';
import { Flex } from "theme-ui"
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const WelcomeContainer = styled(Flex)`
  position: relative;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const WelcomeProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

const WelcomeProfileName = styled.h3`

`

const WelcomeProfileShortBio = styled.p`

`

const WelcomeIntroContainer = ({ profileImage, name, shortBio }) => {
  return (
    <WelcomeContainer>
      <WelcomeProfileImage src={profileImage}/>
      <WelcomeProfileName>{name}</WelcomeProfileName>
      <WelcomeProfileShortBio>{shortBio}</WelcomeProfileShortBio>
    </WelcomeContainer>
  )
}

export default WelcomeIntroContainer;