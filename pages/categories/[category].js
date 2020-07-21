import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';

import ArticleCard from '../../components/ArticleCard';
import MainLayout from '../../components/MainLayout';

const Category = ({ articles, category }) => {
  return (
    <MainLayout>
      <HeadingWrapper>
        <Link href='/categories'>
          <Button variant='light'>&larr; Back to categories</Button>
        </Link>
        <StyledHeading>{category}</StyledHeading>
      </HeadingWrapper>

      <div>
        {articles.map((articleProps) => (
          <ArticleCard articleProps={articleProps} key={articleProps.title} />
        ))}
      </div>
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

export default Category;
