import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div style={{ padding: '30px' }}>
          <Link href={`post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p style={{ color: 'red' }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
