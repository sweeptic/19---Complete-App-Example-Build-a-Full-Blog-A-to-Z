import { DUMMY_POSTS } from '..';
import AllPosts from '../../components/posts/all-posts';

export default function AllPostPage() {
  const posts = DUMMY_POSTS;

  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
}
