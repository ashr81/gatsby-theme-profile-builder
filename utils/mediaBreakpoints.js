import { css } from '@emotion/core';

/**
 * Appends css based on property used to call media here.
 * desktopL, desktopS, tablet, mobileL, mobileS are main breakpoints.
 * desktop, mobile breakpoints address all desktop and mobile resolutions respectively.
 */

export const breakpoints = {
  desktopL: {min: 1800},
  desktopS: {min: 1200, max: 1799},
  tabletL: {min: 900, max: 1199},
  tabletS: {min: 600, max: 899},
  desktop: {min: 1200},
  tablet: {min: 600, max: 1199},
  mobile: {max: 599}
}

// Iterate through the breakpoints and create a media template
export const queryBreakpoints = (excludeMedia=false) => Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => {
    const { min, max } = breakpoints[label]
    if(min && max) {
      // without all not is not working here.
      return excludeMedia ?
        css`
        @media not all and (min-width: ${min}px) and (max-width: ${max}px){
          ${css(...args)}
        }`
        : css`
        @media (min-width: ${min}px) and (max-width: ${max}px){
          ${css(...args)}
        }
      `
    } else if(min) {
      return excludeMedia ?
        css`
        @media not all and (min-width: ${min}px) {
          ${css(...args)}
        }
      `
        : css`
        @media (min-width: ${min}px) {
          ${css(...args)}
        }
      `
    } else if(max) {
      return excludeMedia ? 
        css`
        @media not all and (max-width: ${max}px) {
          ${css(...args)}
        }
      `
        : css`
        @media (max-width: ${max}px) {
          ${css(...args)}
        }
      `
    }
  }
  return acc;
}, {})

export const media = queryBreakpoints(false);

/**
 * Excludes the only breakpoints and adds in the css.
 */
export const excludeMedia = queryBreakpoints(true);