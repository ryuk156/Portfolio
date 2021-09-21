import React, { useState } from "react";
import Layout from "../../Components/Layout/index";
import Modal from "../../Components/Modal/Modal";
import {
  getAllPostIds,
  getPostsData,
  getPostData,
} from "../../lib/parseMarkdown";

export async function getStaticProps({ params }) {
  const postData = await getPostsData(params.id);
  const allPostData = getPostData();
  return {
    props: {
      postData,
      allPostData,
    },
  };
}

export default function Post({ allPostData, postData }) {
  
  const [visible,setVisible]=useState(false)

  // const closeModal=()=>{
  //    setVisible(!visible)
  // }

  return (
    <div>
      <Layout data={allPostData} />
      <Modal title={postData.title}  />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
