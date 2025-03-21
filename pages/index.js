import FeaturedPosts from '../components/home-page/featured-posts';
import HeroPage from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

export default function HomePage(props) {
  return (
    <>
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
