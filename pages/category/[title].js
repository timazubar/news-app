import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import MainLayout from '../../components/MainLayout';

const Category = ({ articles }) => {
  const router = useRouter();
  return (
    <MainLayout>
      <h1>Category {router.query.title}</h1>
      <p>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </p>

      <ul>
        {articles.map((article) => (
          <li key={article.title}>
            <Title>{article.title}</Title>
            <Author>{article.author}</Author>
            <Content>{article.content}</Content>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Category.getInitialProps = async (ctx) => {
  console.log(ctx);
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

const Title = styled.h3`
  color: tomato;
`;

const Author = styled.h3`
  color: navy;
`;

const Content = styled.h3`
  color: green;
`;

export default Category;
