import Image from "next/image";
import Link from "next/link";
async function getLastPost () {
  const res = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();
  return posts;
}

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
    <div className="main-heading">
      <h1>Selamat datang di NextJS News</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde fuga error, aliquid enim doloremque impedit corrupti ullam laborum consequatur.</p>
    </div>
    <div className="post-list">
      {
        posts.map((post) => (
          <div className="post-item" key={post.id}>
            <h2><Link href='/'>{post.title}</Link></h2>
          </div>
        ))
      }
    </div>
    </>
  );
}
