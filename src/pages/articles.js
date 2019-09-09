
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Articles as ArticlesTemplate } from '../components/templates';

const Articles = () => {
  const { 
    allContentfulBlogPost: {
      edges: data
    } 
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (<ArticlesTemplate data={data}/>)
}

export default Articles;