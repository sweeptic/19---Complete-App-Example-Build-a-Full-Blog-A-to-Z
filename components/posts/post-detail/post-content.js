import Image from 'next/image';
import classes from './post-content.module.css';
import PostHeaderPage from './post-header';
import ReactMarkdown from 'react-markdown';

export default function PostContentPage(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeaderPage title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
