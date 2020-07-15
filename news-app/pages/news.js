import Link from 'next/link';

import MainLayout from '../components/MainLayout';

const News = () => {
  return (
    <MainLayout>
      <h1>News Page</h1>
      <p>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </p>
    </MainLayout>
  );
};

export default News;
