import { getAllPostIds, getPostsData } from "../../lib/parseMarkdown";

export default function Post({ postData }) {
  return <div>{postData.title}</div>;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostsData(params.id);
  return {
    props: {
      postData,
    },
  };
}
