import React, { useEffect, useRef } from "react";
import Link from "next/link";
const Modal = ({ title, layoutRef }) => {
  useEffect(() => {
    const getRef = layoutRef?.current;
    document.body.classList.add("hide-all-scroll");
    if (getRef) getRef.style.setProperty("filter", "blur(5px)");
    return () => {
      document.body.classList.remove("hide-all-scroll");
      getRef?.style.setProperty("filter", "blur(0px)");
    };
  }, [layoutRef]);

  return (
    <div>
      <Link href={"/"}>
        <div className="modal"> </div>
      </Link>
      <div className="modal-content">{title}</div>
    </div>
  );
};

export default Modal;
