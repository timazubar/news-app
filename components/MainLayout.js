import Link from 'next/link';
import Head from 'next/head';

import styled from 'styled-components';

const MainLayout = ({ children, title = 'Next JS | News App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledNav>
        <Link href={'/'}>
          <StyledAnchor>Home</StyledAnchor>
        </Link>
        <Link href={'/about'}>
          <StyledAnchor>About</StyledAnchor>
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
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const StyledMain = styled.main`
  margin-top: 50px;
`;

export default MainLayout;
