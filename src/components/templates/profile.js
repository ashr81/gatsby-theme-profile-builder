/** @jsx jsx */
import React from "react";
import { Head } from "../molecules";
import { Layout, TimelineList, ProfileView, WelcomeTiles } from "../organisms";
import { Styled, jsx, Flex } from 'theme-ui';

const Profile = ({ timelines, author, layouts, intro }) => {
  return (
    <Layout>
      <WelcomeTiles layouts={layouts} intro={intro}/>
      <Head title='Profile'/>
      <ProfileView {...author}/>
      <Flex sx={{
        justifyContent: 'center'
      }}>
        <Styled.h3 sx={{
          mt: 4
        }}>Work Experience</Styled.h3>
      </Flex>
      <TimelineList timelineEvents={timelines}/>
    </Layout>
  )
}

export default Profile;
