import Head from 'next/head';
import { server } from '../config';
import { ArticleList } from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDeb Newz</title>
        <meta name='keywords' content='Web development, programming' />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const articles = await fetch(`${server}/api/articles`).then((res) =>
    res.json()
  );

  return {
    props: {
      articles,
    },
  };
};

/* export const getStaticProps = async () => {
  const articles = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  ).then((res) => res.json());

  return {
    props: {
      articles,
    },
  };
};
 */
