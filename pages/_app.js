import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import initializeStore from '../stores';

class MyApp extends App {
  static async getInitialProps(appContext) {
    const store = initializeStore();
    appContext.ctx.store = store;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialState: store,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.store = isServer
      ? props.initialState
      : initializeStore(props.initialState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.store}>
        <Head>
          <title>Next JS | News App</title>
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>

        <style jsx global>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </Provider>
    );
  }
}

export default MyApp;
