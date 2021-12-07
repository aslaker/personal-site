import type { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";

// Import the generated Lists API from Keystone
import { query } from ".keystone/api";
import { Post } from "../../types/data.types";

// Home receives a `posts` prop from `getStaticProps` below
const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
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

export default Home;

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts: Post[] = await query.Post.findMany({ query: "id title slug" });
  return { props: { posts } };
}
