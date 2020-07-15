import Link from 'next/link';

import MainLayout from '../components/MainLayout';

const Index = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Index;
