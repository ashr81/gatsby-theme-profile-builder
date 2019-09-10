import React from 'react';
import { graphql } from 'gatsby'
import { Article as ArticleTemplate } from '../templates';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost (slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Article = ({ data }) => <ArticleTemplate data={data}/>

export default Article;