import Link from 'next/link';
import styled from 'styled-components';

import MainLayout from '../components/MainLayout';

const News = () => {
  const categories = [
    {
      id: 1,
      title: 'business',
      imageUrl:
        'https://www.kindadusty.com/wp-content/uploads/2016/05/Business-1170x768.jpg',
    },
    {
      id: 2,
      title: 'science',
      imageUrl:
        'https://www.rmit.edu.au/content/dam/rmit/au/en/study-with-us/interest-areas/thumbnails/science-study-area-1220x732.jpg',
    },
    {
      id: 3,
      title: 'sports',
      imageUrl:
        'https://sportsshow.net/wp-content/uploads/2019/04/Most-Popular-Sports-in-America.jpg',
    },
  ];

  return (
    <MainLayout>
      <HeadingWrapper>
        <Link href='/'>
          <BackLink>&larr; Back to home</BackLink>
        </Link>
        <h1>Choose category &#8681;</h1>
      </HeadingWrapper>

      <StyledUl>
        {categories.map((category) => (
          <StyledLi key={category.id}>
            <Link href={`/category/${category.title}`}>
              <StyledLink>{category.title}</StyledLink>
            </Link>
            <StyledImg src={category.imageUrl} />
          </StyledLi>
        ))}
      </StyledUl>
    </MainLayout>
  );
};

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  width: 55%;
`;

const BackLink = styled.a`
  font-size: 1.5rem;
  padding: 0.5rem;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 0;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 5px solid black;
  border-radius: 5px;
`;

const StyledLink = styled.a`
  padding: 1rem;
  font-size: 3rem;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledImg = styled.img`
  height: 250px;
  width: auto;
`;

export default News;
