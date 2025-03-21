import Image from 'next/image';
import classes from './posts-item.module.css';

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const readableDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time datetime="">{readableDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
