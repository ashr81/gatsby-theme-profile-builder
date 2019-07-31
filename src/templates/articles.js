
/** @jsx jsx */
import React from 'react';
import { Layout, Head } from '../components';
import { Styled, jsx } from "theme-ui"
import { graphql, useStaticQuery, Link } from 'gatsby';
import { ARTICLES } from '../baseRoutes';

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
  return (
    <div>
      <Layout>
        <Head title='Articles'/>
        <Styled.h1>Articles</Styled.h1>
        <Styled.ol>
          {data.map((i) => (
            <Styled.li key={i.node.id}>
              <Styled.a as={Link} to={`${ARTICLES}/${i.node.slug}`}>
                <Styled.h3 sx={{
                  my: 2
                }}>{i.node.title}</Styled.h3>
                <Styled.p>{i.node.publishedDate}</Styled.p>
              </Styled.a>
            </Styled.li>
          ))}
        </Styled.ol>
      </Layout>
    </div>
  )
}

export default Articles;