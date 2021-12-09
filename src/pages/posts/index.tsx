import type {
  InferGetStaticPropsType,
  NextLayoutComponentType,
  NextPage,
} from "next";
import Link from "next/link";

// Import the generated Lists API from Keystone
import { query } from ".keystone/api";
import { Post } from "../../types/data.types";
import { ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";

// Home receives a `posts` prop from `getStaticProps` below
const Blog: NextLayoutComponentType<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  return (
    <div>
      <main style={{ margin: "3rem" }}>
        <h1>Hello World! 👋🏻 </h1>
        <ul>
          {/* Render each post with a link to the content page */}
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts: Post[] = await query.Post.findMany({ query: "id title slug" });
  return { props: { posts } };
}