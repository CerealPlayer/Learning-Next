import PostContent from "../../components/posts/post-deatil/PostContent";
import { getPostData, getPaths } from "../../utils/posts";

export default function PostDetail(props) {
  return <PostContent post={props.post} />;
}

export async function getStaticProps(context) {
  const fileName = context.params.slug + ".md";
  const post = getPostData(fileName);

  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {
  const fullPathArray = getPaths();

  const pathArray = fullPathArray.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  const paths = pathArray.map((path) => ({
    params: { slug: path },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
