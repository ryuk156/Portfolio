import React, { useState, useRef } from "react";
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
  const elementRef = useRef();
  const modalRef =useRef()
  if (process.browser) {
    elementRef.current = document.getElementById?.("main-view");
    modalRef.current = document.getElementById?.("modal-view");
  }

  return (
    <>
      <div ref={elementRef} id="main-view">
        <Layout data={allPostData} />
      </div>
      <Modal layoutRef={elementRef} postdata={postData} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
