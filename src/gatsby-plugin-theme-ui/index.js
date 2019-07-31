import { red } from "ansi-colors";

/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  breakpoints: [600, 900, 1200],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  initialColorMode: 'light',
  colors: {
    text: '#000',
    textHover: '#3a3434',
    primary: '#07c',
    headerHoverContainer: '#4f91bf',
    headerHoverText: 'text',
    headerActiveContainer: '#3e9de0',
    background: '#fff',
    secondary: '#05a',
    muted: '#f6f6f6f',
    light: '#f4f4f4',
    lightHover: '#dad2d2',
    modes: {
      dark: {
        text: '#fff',
        headerHoverContainer: '#07c',
        headerHoverText: 'text',
        headerActiveContainer: '#3b9ade',
        textHover: '#ded8d8',
        background: '#171616',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
        light: '#3a3535',
        lightHover: '#272525',
      }
    }
  },
  fonts: {
    body: 'Nunito, sans-serif',
    heading: 'Nunito, sans-serif',
    default:
      'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  radii: [0, 2, 4, 8, 16],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        maxWidth: "container",
        padding: 3,
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    h1: {
      color: "text",
      fontSize: 5,
      lineHeight: "heading",
    },
    h3: {
      color: "text",
      fontSize: 3,
      my: 0,
      py: 0
    },
    span: {
      color: "text"
    },
    a: {
      textDecoration: 'none',
      cursor: 'pointer',
      color: 'text',
      "&:hover": {
        color: 'textHover'
      }
    },
    p: {
      my: 2
    },
    ol: {
      listStyleType: 'none',
      pl: 0
    },
    li: {
      py: 1,
      px: 2,
      my: 1,
      borderRadius: 2,
      backgroundColor: 'light',
      color: 'text',
      "&:hover": {
        backgroundColor: 'lightHover'
      }
    }
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'text',
      cursor: 'pointer'
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
      cursor: 'pointer'
    }
  }
}
