import Link from 'next/link';
import styled from 'styled-components';

import MainLayout from '../../components/MainLayout';

const Category = ({ articles, category }) => {
  return (
    <MainLayout>
      <HeadingWrapper>
        <Link href='/categories'>
          <MoveBack>&larr; Back to categories</MoveBack>
        </Link>
        <StyledHeading>{category}</StyledHeading>
      </HeadingWrapper>

      <StyledUl>
        {articles.map((article) => (
          <StyledLi key={article.title}>
            <TextWrapper>
              <Title href={article.url}>{article.title}</Title>
              <Author>{article.author}</Author>
              <Content>{article.description}</Content>
            </TextWrapper>
            <StyledImg src={article.urlToImage} alt='Image is not provided' />
          </StyledLi>
        ))}
      </StyledUl>
    </MainLayout>
  );
};

Category.getInitialProps = async ({ store, query }) => {
  const { category } = query;
  await store.FetchCategoryStore.fetchNews(category);
  return {
    category,
    articles: store.FetchCategoryStore.articles,
  };
};

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  width: 55%;
`;

const StyledHeading = styled.h2`
  font-size: 2.5rem;
  margin: 1rem;
  text-align: center;
  text-transform: uppercase;
`;

const MoveBack = styled.a`
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  border: 5px solid black;
  border-radius: 5px;
  margin: 1rem 5rem;
  padding: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`;

const Title = styled.a`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

const Author = styled.p`
  font-size: 1.75rem;
  color: navy;
`;

const Content = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const StyledImg = styled.img`
  align-self: center;
  height: 200px;
  width: auto;
`;

export default Category;
