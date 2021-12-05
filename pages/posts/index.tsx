import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { fetchGraphQL, gql } from "../../utils";

type Post = {
  id: string;
  title: string;
  slug: string;
};

const PostsPage = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.slug}`} as={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsPage;

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const data = await fetchGraphQL(
    gql`
      query {
        posts {
          id
          title
          slug
        }
      }
    `
  );
  return { props: { posts: data.posts }, revalidate: 60 };
}
