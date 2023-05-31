import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

// Import the generated Lists API from Keystone
import type { Page, Post } from "../../types/data.types";
import type { ReactNode } from "react";
import MainLayout from "../../layouts/MainLayout";
import Head from "next/head";
import { keystoneContext } from "../../keystone/context";
import type { NextPageWithLayout } from "../_app";

export async function getStaticProps() {
  const page = (await keystoneContext.query.Page.findOne({
    where: { name: "Blog" },
    query: "name headerText aboutText",
  })) as Page;
  const posts = (await keystoneContext.query.Post.findMany({
    query: "id title slug",
  })) as Post[];
  return { props: { posts, page } };
}

const Blog: NextPageWithLayout<
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
