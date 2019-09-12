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
      allLayout {
        nodes {
          imageUrl
          heading
          description
        }
      }
      intro {
        profileImage
        name
        shortBio
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
  const {
    allTimeline: { nodes: timelines },
    allLayout: { nodes: layouts },
    site: { siteMetadata: { author }},
    intro
  } = data;
  return (
    <ProfileTemplate
      timelines={timelines}
      author={author}
      layouts={layouts}
      intro={intro}
    />
  )
}

export default Profile;
