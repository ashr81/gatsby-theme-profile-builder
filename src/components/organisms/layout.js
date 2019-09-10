/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { Layout as StyledLayout, Main, useColorMode, jsx, css } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby";
import { Footer, Header } from ".";
import { Button, Container } from '../atoms';

const Layout = ({ children }) => {
  const [mode, setMode] = useColorMode()
  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

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
          <Button
            variant='primary'
            title="Toggle Dark Mode"
            onClick={toggleMode}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              m: [3, 4],
              p: 2,
              border: 0,
              borderRadius: 3,
              variant: 'buttons.secondary'
            }}
          >
            {mode && mode.split('').reduce((acc, cur, index) => index === 0 ? acc + cur.toUpperCase() : acc + cur, '')} Mode
          </Button>
          <Container>{children}</Container>
        </Main>
        <Footer author={data.site.siteMetadata.author.name}/>
      </StyledLayout>
    </>
  )
}

export default Layout
