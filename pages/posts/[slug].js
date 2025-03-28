import Head from 'next/head';

import { getPostData, getPostsFiles } from '../../lib/posts-util';
import PostContentPage from '../../components/posts/post-detail/post-content';

export default function PostDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.postData.title}</title>
        <meta name="description" content={props.postData.excerpt} />
      </Head>
      <PostContentPage post={props.postData} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;

  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: { postData },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
