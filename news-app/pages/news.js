import Link from 'next/link';

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <p>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </p>
    </>
  );
};

export default News;
