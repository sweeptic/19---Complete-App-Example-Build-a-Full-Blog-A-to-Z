import { DUMMY_POSTS } from '../../../pages';
import classes from './post-content.module.css';
import PostHeaderPage from './post-header';

const DUMMY_POST_ONE = { ...DUMMY_POSTS[0], content: '# This is a first post' };

console.log('DUMMY_POST_ONE', DUMMY_POST_ONE);

const imagePath = `/images/posts/${DUMMY_POST_ONE.slug}/${DUMMY_POST_ONE.image}`;

export default function PostContentPage() {
  return (
    <article className={classes.content}>
      <PostHeaderPage title={DUMMY_POST_ONE.title} image={imagePath} />
      {DUMMY_POST_ONE.content}
    </article>
  );
}
