import Link from 'next/link';

const Index = () => {
  return (
    <>
      <h1>Hello, NEXT JS</h1>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href='/news'>
          <a>News</a>
        </Link>
      </p>
    </>
  );
};

export default Index;
