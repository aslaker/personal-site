import React from "react";
import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <h1>PostPage works!</h1>
      <h2>Post: {slug}</h2>
    </>
  );
};

export default PostPage;
