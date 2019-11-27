import React from 'react';
import App from 'next/app';
import {Provider} from "react-redux";
import Layout from '../layouts/default';
import makeStore from '../store/index';
import withRedux from "next-redux-wrapper";

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps};
  }

  render() {
    const { Component, pageProps, store} = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
