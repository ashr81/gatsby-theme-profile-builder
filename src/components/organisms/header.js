/** @jsx jsx */
import React from "react"
import { Header as Container, Flex, Styled, jsx } from "theme-ui"
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ARTICLES } from "../../baseRoutes";
import { HeaderLink } from '../atoms'

const Header = ({ title, description }) => {
  return (
    <Container sx={{
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}>
      <Flex sx={{
        flexGrow: 1
      }}>
        <Styled.h3
          sx={{
            mx: 3,
            my: 3
          }}
        >{title}</Styled.h3>
      </Flex>
      <Flex sx={{
        alignItems: 'center',
        flexGrow: 1
      }}>
        <HeaderLink sx={{px: 3}} as={Link} to='/'>Profile</HeaderLink>
        <HeaderLink sx={{px: 3}} as={Link} to={ARTICLES}>Articles</HeaderLink>
      </Flex>
      <Helmet htmlAttributes={{lang: 'en'}} meta={[
        {
          name: 'description',
          content: description
        }
      ]}>
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,400i,600,800&display=swap" rel="preconnect" as="style"></link>
      </Helmet>
    </Container>
  )
}

export default Header;
