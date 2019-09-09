import styled from '@emotion/styled';

const HeaderLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.headerHoverContainer};
    color: ${({ theme }) => theme.colors.headerHoverText}
  }
`

export default HeaderLink;

