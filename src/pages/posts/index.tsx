import type {
  InferGetStaticPropsType,
  NextLayoutComponentType,
  NextPage,
} from "next";
import Link from "next/link";

// Import the generated Lists API from Keystone
import { Page, Post } from "../../types/data.types";
import { ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";
import Head from "next/head";
import { keystoneContext } from "../../keystone/context";

export async function getStaticProps() {
  const context = await keystoneContext;
  const page = (await context.query.Page.findOne({
    where: { name: "Blog" },
    query: "name headerText aboutText",
  })) as Page;
  const posts = (await context.query.Post.findMany({
    query: "id title slug",
  })) as Post[];
  return { props: { posts, page } };
}

const Blog: NextLayoutComponentType<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts, page }) => {
  return (
    <div>
      <main style={{ margin: "3rem" }}>
        <Head>
          <title>{page.name}</title>
        </Head>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
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
