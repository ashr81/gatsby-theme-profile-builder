/** @jsx jsx */
import React from 'react';
import { jsx, Flex, Styled } from "theme-ui";
import { FaGithub, FaTwitter } from 'react-icons/fa';

const ProfileView = ({ name, github, twitter, image_url }) => {
  return (
  <Flex sx={{
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center'
  }}>
    {image_url ? <img src={image_url} sx={{
      height: '200px',
      borderRadius: '50%'
    }} alt="Profile"/>
    :
    <Flex sx={{
      height: '200px',
      alignItems: 'center'
    }}><Styled.p>
      Add 200 x 200 px image in your sitemeta data.
    </Styled.p></Flex>}
    <Styled.h3>{name}</Styled.h3>
    <Flex sx={{
      width: '100%',
      justifyContent: 'space-around'
    }}>
      {github ? <Styled.a href={github} target='_blank'><FaGithub size={30}/></Styled.a> : null}
      {twitter? <Styled.a href={twitter} target='_blank'><FaTwitter size={30}/></Styled.a> : null }
    </Flex>
  </Flex>)
}

export default ProfileView;