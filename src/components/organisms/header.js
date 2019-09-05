/** @jsx jsx */
import React from "react"
import { Header as Container, Flex, Styled, jsx } from "theme-ui"
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';
import { ARTICLES } from "../../baseRoutes";

const Header = ({ title, description }) => {
  return (
    <Container sx={{
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}>
      <Styled.h3
        sx={{
          mx: 3,
          my: 3
        }}
      >{title}</Styled.h3>
      <Flex sx={{
        alignItems: 'center'
      }}>
        <Styled.a sx={{
          px: 3,
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          "&:hover": {
            backgroundColor: 'headerHoverContainer',
            color: 'headerHoverText'
          }
        }} as={Link} to='/'>Profile</Styled.a>
        <Styled.a sx={{
          px: 3,
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          "&:hover": {
            backgroundColor: 'headerHoverContainer',
            color: 'headerHoverText'
          }
        }} as={Link} activeStyle={{
          backgroundColor: 'headerActiveContainer',
          color: 'headerHoverText'
        }} to={ARTICLES}>Articles</Styled.a>
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
