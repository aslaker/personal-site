import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { Post } from "../../types/data.types";
import { keystoneContext } from "../../keystone/context";

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const context = await keystoneContext;
  const posts = (await context.query.Post.findMany({
    query: `slug`,
  })) as Post[];

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
  const context = await keystoneContext;
  const post = (await context.query.Post.findOne({
    where: { slug: params!.slug as string },
    query: "id title",
  })) as Post;
  return { props: { post } };
}

const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  return (
    <div>
      <main style={{ margin: "3rem" }}>
        <div>
          <Link href="/posts">&larr; back to posts</Link>
        </div>
        <h1>{post.title}</h1>
      </main>
    </div>
  );
};

export default PostPage;
