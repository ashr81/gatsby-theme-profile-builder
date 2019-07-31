/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { Layout as StyledLayout, Main, Container, jsx, css } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby";
import { Footer, Header } from ".";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
          }
          description
        }
      }
    }
  `)

  return (
    <>
      <Global
          styles={css({
            "*": {
              boxSizing: `border-box`,
            },
            body: {
              margin: 0,
            },
          })}
        />
      <StyledLayout>
        <Header title={data.site.siteMetadata.title} description={data.site.siteMetadata.description}/>
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer author={data.site.siteMetadata.author.name}/>
      </StyledLayout>
    </>
  )
}

export default Layout
