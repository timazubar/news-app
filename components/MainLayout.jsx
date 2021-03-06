import Link from 'next/link';
import styled from 'styled-components';

const MainLayout = ({ children }) => {
  return (
    <>
      <StyledNav>
        <Link href={'/'}>
          <StyledAnchor variant='white'>Home</StyledAnchor>
        </Link>
        <Link href={'/categories'}>
          <StyledAnchor>News</StyledAnchor>
        </Link>
      </StyledNav>
      <StyledMain>{children}</StyledMain>
    </>
  );
};

const StyledNav = styled.nav`
  z-index: 2;
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
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledMain = styled.main`
  margin-top: 50px;
`;

export default MainLayout;
