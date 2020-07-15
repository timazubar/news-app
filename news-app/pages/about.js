import Link from 'next/link';

import MainLayout from '../components/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <h1>About page</h1>
      <p>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </p>
    </MainLayout>
  );
};

export default About;
