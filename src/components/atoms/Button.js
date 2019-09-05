/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui";

const Button = ({
  variant = 'primary',
  children,
  ...props
}) => (
<button
  {...props}
  sx={{
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    fontSize: 'inherit',
    m: 0,
    px: 3,
    py: 2,
    border: 0,
    borderRadius: 4,
    variant: `buttons.${variant}`
  }}
>
{children}
</button>)

export default Button;

