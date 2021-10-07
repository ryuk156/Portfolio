import React, { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Tags from "../Tags/Tags";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
const Modal = ({ postdata, layoutRef }) => {
  const router = useRouter();
  useEffect(() => {
    const getRef = layoutRef?.current;
    if (getRef) getRef.style.setProperty("filter", "blur(5px)");
    return () => {
      getRef?.style.setProperty("filter", "blur(0px)");
    };
  }, [layoutRef]);

  function onClose() {
    router.push("/", undefined, { scroll: false });
  }

  const image = "/images/" + `${postdata.profile}`;
  const drawerImage = "/images/" + `${postdata.gif}`;

  return (
    <div>
      <div className="modal" onClick={() => onClose()}></div>
      <div className="modal-content">
        <div className="modal-start-content">
          <div className="modal-item-a">
            <img src={image} className="modal-img" />
          </div>
          <div className="modal-item-b">
            <div className="modal-title">{postdata.title}</div>
            {/* <div className="modal-excerpt">{postdata.excerpt}</div> */}
          </div>
          <div className="modal-item-c">
          <div className="modal-project-link">
            <Link href={postdata.link} passHref>
              <i className="fa fa-github" aria-hidden="true"></i>
            </Link>
          </div>
          </div>
        </div>
        <div className="modal-main-content">
          <div className="modal-tags">
            {postdata.tags.map((tag, index) => {
              return <Tags key={index} tag={tag} />;
            })}
          </div>
          <div className="project-description">
            <div dangerouslySetInnerHTML={{ __html: postdata.contentHtml }} />
          </div>
          <div className="modal-image-drawer">
            <Image src={drawerImage} width={500} height={300} />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Modal;
