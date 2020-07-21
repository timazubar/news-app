import { Button } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import CategoryCard from '../../components/CategoryCard';
import MainLayout from '../../components/MainLayout';

const Categories = ({ categories }) => {
  return (
    <MainLayout>
      <HeadingWrapper>
        <Link href='/'>
          <Button variant='light'>&larr; Back to home</Button>
        </Link>
        <h1>Choose category &#8681;</h1>
      </HeadingWrapper>

      <CardWrapper>
        {categories.map((categoryProps) => (
          <CategoryCard categoryProps={categoryProps} key={categoryProps.id} />
        ))}
      </CardWrapper>
    </MainLayout>
  );
};

Categories.getInitialProps = ({ store }) => {
  return {
    categories: store.UICategoriesStore.categories,
  };
};

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  width: 55%;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  list-style-type: none;
  padding: 0;
`;

export default observer(Categories);
