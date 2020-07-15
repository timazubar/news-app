import Link from 'next/link';

const About = () => {
  return (
    <>
      <h1>About page</h1>
      <p>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </p>
    </>
  );
};

export default About;
