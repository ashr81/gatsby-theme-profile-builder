import React from 'react';
import { Head } from '../molecules';
import { Layout } from '../organisms';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

const Article = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />;
      }
    }
  }
  const { title, publishedDate, body } = data.contentfulBlogPost;
  return(
    <Layout>
      <Head title={title}/>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Article;