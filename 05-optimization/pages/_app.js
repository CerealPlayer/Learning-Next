import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next project</title>
        <meta
          name="description"
          content="Dummy project I am building to learn Next"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
