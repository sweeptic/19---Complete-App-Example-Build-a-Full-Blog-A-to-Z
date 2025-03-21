import FeaturedPosts from '../components/home-page/featured-posts';
import HeroPage from '../components/home-page/hero';

export const DUMMY_POSTS = [
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a the React framework for production',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs1',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a the React framework for production',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs2',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a the React framework for production',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs3',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a the React framework for production',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs4',
  },
];

export default function HomePage() {
  // 1) Hero
  // 2) Featured Posts

  return (
    <>
      <HeroPage />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
