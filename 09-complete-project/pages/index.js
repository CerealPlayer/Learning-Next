import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";
import { getFeaturedPosts } from "../utils/posts";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
        <meta name='description' content='I post about programming' />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featured = getFeaturedPosts();

  return {
    props: {
      posts: featured,
    },
  };
}
