import Link from 'next/link';
import styled from 'styled-components';

import MainLayout from '../components/MainLayout';

const News = () => {
  const categories = [
    {
      id: 1,
      title: 'business',
    },
    {
      id: 2,
      title: 'science',
    },
    {
      id: 3,
      title: 'sports',
    },
  ];

  return (
    <MainLayout>
      <h1>Choose category</h1>
      <p>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </p>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.title}`}>
              <a>{category.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default News;
