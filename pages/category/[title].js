import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import MainLayout from '../../components/MainLayout';

const Category = ({ articles }) => {
  const router = useRouter();
  return (
    <MainLayout>
      <StyledHeading>{router.query.title}</StyledHeading>

      <Link href='/news'>
        <MoveBack>&larr; Back to categories</MoveBack>
      </Link>

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

Category.getInitialProps = async (ctx) => {
  const response = await fetch(
    `http://newsapi.org/v2/top-headlines?category=${ctx.query.title}&apiKey=545054ab22e9474b82aed84d211dcf1b`
  );
  const { articles } = await response.json();
  const filteredArticles = [];

  for (let i = 0; i < articles.length; i++) {
    const uniqueArticle = filteredArticles.find(
      (article) => article.title === articles[i].title
    );
    if (!uniqueArticle) {
      filteredArticles.push(articles[i]);
    }
  }
  return {
    articles: filteredArticles,
  };
};

const StyledHeading = styled.h2`
  font-size: 2.5rem;
  margin: 1rem;
  text-align: center;
  text-transform: uppercase;
`;

const MoveBack = styled.a`
  font-size: 1.5rem;
  text-decoration: underline;
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
