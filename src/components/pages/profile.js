import React, { useEffect } from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { Profile as ProfileTemplate } from "../templates";

const Profile = () => {
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
  useEffect(() => {
    window.scroll(0, 60)
  }, [])
  const { allTimeline: { nodes: timelines }, site: { siteMetadata: { author }} } = data;
  return (
    <ProfileTemplate
      timelines={timelines}
      author={author}
    />
  )
}

export default Profile;
