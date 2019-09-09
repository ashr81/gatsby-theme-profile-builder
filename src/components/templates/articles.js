
/** @jsx jsx */
import React from 'react';
import { Head } from '../molecules';
import { Layout } from '../organisms';
import { Styled, jsx } from "theme-ui"
import { Link } from 'gatsby';
import { ARTICLES } from '../../baseRoutes';

const Articles = ({ data }) => (
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

export default Articles;