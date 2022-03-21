import PostItem from "./PostItem";

import classes from "./PostGrid.module.css";

export default function PostGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          slug={post.slug}
          image={post.image}
          title={post.title}
          date={post.date}
          description={post.description}
        />
      ))}
    </ul>
  );
}
