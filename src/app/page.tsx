import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/lib/api";
import PostList from "@/components/PostsList";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
    <div className="main-heading">
      <h1>Selamat datang di NextJS News</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde fuga error, aliquid enim doloremque impedit corrupti ullam laborum consequatur.</p>
    </div>
    <PostList posts={posts} />
    </>
  );
}
