/** @jsx jsx */
import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { Head } from "../molecules";
import { Layout, TimelineList, ProfileView } from "../organisms";
import { Styled, jsx, Flex } from 'theme-ui';

const ProfileTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allTimeline(sort: {fields: startDate, order: ASC}) {
        nodes {
          id
          name
          startDate(formatString: "MMMM Do, YYYY")
          endDate(formatString: "MMMM Do, YYYY")
          role
          description
          techStack
          url
        }
      }
      site {
        siteMetadata {
          author {
            name
            github
            twitter
            image_url
          }
        }
      }
    }
  `)
  const { allTimeline: { nodes: timelines }, site: { siteMetadata: { author }} } = data;

  return (
    <Layout>
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

export default ProfileTemplate;
