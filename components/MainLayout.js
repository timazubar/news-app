import Link from 'next/link';

import styled from 'styled-components';

const MainLayout = ({ children, title = 'Next JS | News App' }) => {
  return (
    <>
      <StyledNav>
        <Link href={'/'}>
          <StyledAnchor>Home</StyledAnchor>
        </Link>
        <Link href={'/news'}>
          <StyledAnchor>News</StyledAnchor>
        </Link>
      </StyledNav>
      <StyledMain>{children}</StyledMain>
    </>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  left: 0;
  top: 0;
  right: 0;
  background: black;
`;

const StyledAnchor = styled.a`
  font-size: 2rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledMain = styled.main`
  margin-top: 50px;
`;

export default MainLayout;
