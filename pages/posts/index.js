import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

export default function AllPostPage(props) {
  return (
    <>
      <AllPosts posts={props.allPosts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
}
