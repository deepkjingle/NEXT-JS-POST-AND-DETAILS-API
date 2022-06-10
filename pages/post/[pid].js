import { useRouter } from 'next/router';
import Link from 'next/link';

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data.map((curElement) => {
    return {
      params: {
        pid: curElement.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pid;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const details = await res.json();

  return {
    props: {
      details,
    },
  };
}

export default function Post({ details }) {
  return (
    <div style={{ padding: '25px' }}>
      <Link href="/">
        <button>Back To Home</button>
      </Link>

      <h2>{details.title}</h2>
      <div>{details.body}</div>
    </div>
  );
}
