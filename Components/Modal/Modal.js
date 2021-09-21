import React, { useEffect, useRef } from "react";
import { useRouter } from 'next/dist/client/router';
import Link from "next/link";
const Modal = ({ title, layoutRef }) => {
  const router = useRouter();
  useEffect(() => {
    const getRef = layoutRef?.current;
    document.body.classList.add("hide-all-scroll");
    if (getRef) getRef.style.setProperty("filter", "blur(5px)");
    return () => {
      document.body.classList.remove("hide-all-scroll");
      getRef?.style.setProperty("filter", "blur(0px)");
    };
  }, [layoutRef]);

  function onClose() {
    router.push('/', undefined, { scroll: false });
  }

  return (
    <div>
    
        <div className="modal" onClick={()=>onClose()}> </div>
    
      <div className="modal-content">{title}</div>
    </div>
  );
};

export default Modal;
