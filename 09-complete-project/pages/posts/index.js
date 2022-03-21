import AllPosts from "../../components/posts/AllPosts";
import Head from "next/head";
import Fragment from "react";
import { getAllPosts } from "../../utils/posts";

export default function Posts(props) {
  return (
    <Fragment>
      <Head>
        <title>These are all my posts</title>
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}
