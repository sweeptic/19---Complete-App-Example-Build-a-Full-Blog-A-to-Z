import Head from 'next/head';

import { getFeaturedPosts } from '../lib/posts-util';
import FeaturedPosts from '../components/home-page/featured-posts';
import HeroPage from '../components/home-page/hero';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta name="description" content="I post about programming and web development." />
      </Head>
      <HeroPage />
      <FeaturedPosts posts={props.featuredPosts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: { featuredPosts },
    revalidate: 60,
  };
}
