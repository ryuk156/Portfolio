import Layout from "../Components/Layout/index";

import { getPostData } from "../lib/parseMarkdown";
import Post from "./projects/[id]";

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
    <div className="hide-x-scroll" >
      <Layout data={allPostData} />
    </div>
  );
}
