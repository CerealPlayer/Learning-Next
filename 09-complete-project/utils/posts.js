import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getPaths() {
  return fs.readdirSync(postsDir);
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDir);
  const posts = postFiles.map((file) => {
    return getPostData(file);
  });

  const sortedPosts = posts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
  return sortedPosts;
}

export function getFeaturedPosts() {
  const posts = getAllPosts();

  const featured = posts.filter(post => post.isFeatured);

  return featured;
}

export function getPostData(fileName) {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  const slug = fileName.replace(/\.md$/, "");

  const postData = {
    slug: slug,
    ...data,
    content,
  };

  return postData;
}
