import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import { query } from ".keystone/api";

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main style={{ margin: "3rem" }}>
        <div>
          <Link href="/posts">
            <a>&larr; back to posts</a>
          </Link>
        </div>
        <h1>{post.title}</h1>
      </main>
    </div>
  );
}

type Post = {
  id: string;
  title: string;
  slug: string;
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts: Post[] = await query.Post.findMany({
    query: `slug`,
  });

  const paths = posts
    .map((post) => post.slug)
    .filter((slug): slug is string => !!slug)
    .map((slug) => ({
      params: {
        slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post: Post = await query.Post.findOne({
    where: { slug: params!.slug as string },
    query: "id title",
  });
  return { props: { post } };
}
