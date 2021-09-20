import Layout from "../Components/Layout/index";

import { getPostData } from "../lib/parseMarkdown";

export async function getStaticProps() {
  const allPostData = getPostData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  return (
    <div>
      <Layout data={allPostData} />
    </div>
  );
}
