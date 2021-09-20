import React, { useState } from "react";
import Modal from "../Modal/Modal";

import Link from "next/link"

const Card = ({title,id}) => {
  return (
    <Link href={`/projects/${id}`} >
    <div className="card">
   

      <div className="card-content">
        <div className="card-item-a">
          <img src="/images/me.png" className="card-img" />
        </div>
        <div className="card-item-b">{title}</div>
      </div>
     
    </div>
    </Link>
  );
};

export default Card;
