/** @jsx jsx */
import React from "react"
import { Footer as Container, jsx } from "theme-ui"

const Footer = ({ author }) => {
  return (
    <Container sx={{
      width: '100%',
      marginTop: 4,
      justifyContent: 'center',
      marginBottom: 2
    }}>
      Created By {author}, © 2019
    </Container>
  )
}

export default Footer;
