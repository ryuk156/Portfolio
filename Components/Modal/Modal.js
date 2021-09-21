import React from "react";
import Link from "next/link";
const Modal = ({ title }) => {
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
