import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next JS | News App</title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </>
  );
};

export default MyApp;
