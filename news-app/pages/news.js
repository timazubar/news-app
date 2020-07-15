import Link from 'next/link';

import MainLayout from '../components/MainLayout';

const News = ({ news }) => {
  return (
    <MainLayout>
      <h1>News Page</h1>
      <p>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </p>
      <pre>{JSON.stringify(news, null, 2)}</pre>
    </MainLayout>
  );
};

News.getInitialProps = async () => {
  const response = await fetch(
    'http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=545054ab22e9474b82aed84d211dcf1b'
  );
  const news = await response.json();

  return {
    news,
  };
};

export default News;
