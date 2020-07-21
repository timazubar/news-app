import { Button } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import MainLayout from '../components/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      <Wrapper>
        <StyledHeading>NEWS APP</StyledHeading>
        <StyledP>
          This is Front-End Tech Task <br /> with usage of
          <br />
          <StyledA href={'https://nextjs.org/'}>Next JS</StyledA> and{' '}
          <StyledA href={'https://mobx.js.org/README.html'}>MobX</StyledA>
        </StyledP>
        <Link href='/categories'>
          <Button variant='dark' size='lg'>
            Click here to read some news &#9993;
          </Button>
        </Link>
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const StyledHeading = styled.h1`
  margin: 1rem;
  padding: 1rem;
  background-color: black;
  color: white;
`;

const StyledP = styled.p`
  padding: 1rem;
  font-size: 2rem;
  background-color: black;
  color: white;
  text-align: center;
`;

const StyledA = styled.a`
  color: white;
`;

const NewsLink = styled.a`
  font-size: 2rem;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
`;

export default Index;
