import Link from 'next/link';

const Article = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export default Article;

export const getStaticPaths = async () => {
  const articles = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  ).then((res) => res.json());

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const article = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  ).then((res) => res.json());

  return {
    props: {
      article,
    },
  };
};

/* Server Side Rendering on each request - SSR */
/* export const getServerSideProps = async (context) => {
  console.log(context);

  const article = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  ).then((res) => res.json());

  return {
    props: {
      article,
    },
  };
};
 */
